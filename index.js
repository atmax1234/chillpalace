const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
var channel

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.on('message', message => {
    if (message.content.startsWith("!welcome-sett")) {
     channel = message.channel.id
    }
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'pedal');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(channel).send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.token);