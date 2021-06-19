const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'ship',
    description: "Looking for ur wife?",
    args: true,
    usage: "<@user>",
    guildOnly: true,
    cooldown: 5,
    execute(message, args, client, Discord) {
        const user = message.mentions.users.first()
        const user3 = message.mentions.users.array()[2]; 

        let replies = ["5% Compatible!", "3% Compatible!", "10% Compatible!", "14% Compatible!", "17% Compatible!", "20% Compatible!", "22% Compatible!", "25% Compatible!", "24% Compatible!", "27% Compatible!", "32% Compatible!", "36% Compatible!", "34% Compatible!", "39% Compatible!", "42% Compatible!", "45% Compatible!", "47% Compatible!", "51% Compatible!", "54% Compatible!", "56% Compatible!", "59% Compatible!", "58% Compatible!", "60% Compatible!", "63% Compatible!", "65% Compatible!", "64% Compatible!", "68% Compatible!", "70% Compatible!", "74% Compatible!", "78% Compatible!", "79% Compatible!", "80% Compatible!", "83% Compatible!", "86% Compatible!", "84% Compatible!", "89% Compatible!", "91% Compatible!", "93% Compatible!", "95% Compatible!", "97% Compatible!", "98% Compatible!", "99% Compatible!", "100% Compatible!", "destined to get married."];

        let result = Math.floor((Math.random() * replies.length))

        const embed = new MessageEmbed()
            .setTitle(`Does ${message.author.username} and ${user.username} match?`)
            .setDescription(`${message.author.username} and ${user.username} are __**${replies[result]}**__`)
            .setThumbnail('https://i.imgur.com/HywjPEB.png')
            .setColor(0x7732a8);

        if (args[1]){
            const embed2 = new MessageEmbed()
                .setTitle(`Does ${user.username} and ${user3.username} match?`)
                .setDescription(`${user.username} and ${user3.username} are __**${replies[result]}**__`)
                .setThumbnail('https://i.imgur.com/HywjPEB.png')
                .setColor(0x7732a8); 
                  
        }
        if(args[2]) return message.channel.send(`You tryna gather a gang bang or wha\'?!`);
    }
};