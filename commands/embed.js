const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'embed',
    description: "this is a embed command!",
    usage: "type !embed",
    permissions: [],

    execute(message,args, cmd, client, Discord) {
        const embed = new MessageEmbed()
        .setTitle("Custom Embed")
        .setAuthor("Discord Bot Studio", message.author.avatarURL())
        .setFooter("Created by aTmAx", "https://i.imgur.com/9xxqSGy.jpg")
        .setThumbnail("https://i.imgur.com/9xxqSGy.jpg")
        .setImage("https://i.imgur.com/9xxqSGy.jpg")
        .setDescription("Custom embed with random colors, created by aTmAx!")
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send(embed);
    }
};