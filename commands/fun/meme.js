const { MessageEmbed } = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports = {
    name: 'meme',
    description: 'Sends random meme',
    async execute(message, args, client){
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor(16776960)
        .setFooter("test")
        .setImage(img)
        .setTitle(`Random Meme requested by <@${message.author.tag}>`)
        .setURL(`https://reddit.com/r/${random}`)
        message.channel.send(embed);
    }
}