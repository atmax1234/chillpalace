const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    usage: "<your suggestion> **Please use more than one word to describe it!**",
    description: 'Creates a suggestion!',

    execute(message, args, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === '「💡」𝘀𝘂𝗴𝗴𝗲𝘀𝘁𝗶𝗼𝗻𝘀');
        if(!channel){
            return message.channel.send('suggestions channel does not exist!');
        }
        if(!args[1])
        {
            return message.channel.send('Oops you must enter a valid suggestion!') .then(msg => {
                setTimeout(() => msg.delete(), 8000)
              })
        }
        let messageArgs = args.join(' ');
        const embed = new MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((error)=>{
            throw error;
        });
    }
}