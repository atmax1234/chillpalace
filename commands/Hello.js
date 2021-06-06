const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hello',
    description: "this is a hello command!",
    usage: "type !Hello",
    permissions: [],
    
    execute(message,args, cmd, client, Discord){
        const embed = new MessageEmbed()
		.addField('😊', 'Hello Dear!')
		message.channel.send(embed)
    }
};