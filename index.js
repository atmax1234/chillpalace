const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const cooldowns = new Map();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const welcome = require('./welcome')

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    //Some module exports safety

    //guildOnly - Not for DM, Only in servers
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }
    //Command Permissions
    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply('You can not do this!');
        }
    }
    //Did we expect any args?
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    //Cooldown
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
   }

   const current_time = Date.now();
   const time_stamps = cooldowns.get(command.name);
   const cooldown_amount = (command.cooldown) * 1000;

   //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
   if(time_stamps.has(message.author.id)){
       const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

       if(current_time < expiration_time){
           const time_left = (expiration_time - current_time) / 1000;

           return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
       }
   }

   //If the author's id is not in time_stamps then add them with the current time.
   time_stamps.set(message.author.id, current_time);
   //Delete the user's id once the cooldown is over.
   setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
    //End of safety

	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});
welcome(client);
client.login(process.env.token);