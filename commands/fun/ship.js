const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'ship',
    description: "Looking for ur wife?",
    args: true,
    usage: "<@user>",
    guildOnly: true,
    cooldown: 5,
    execute(message, args, client, Discord) {
        var count = 0; //To find out what user we're on.
        let user1; //Defining the users
        let user2; //Defining the users
        message.mentions.forEach(user => {
            count++; //Adding one onto the count variable
            if (count >= 3) return; //If the user mentioned more than two users return
            if (count === 1) user1 = message.guild.members.fetch(user.id); //Getting the first mentioned user
            else user2 = message.guild.members.fetch(user.id); //Getting the second mentioned user
        });

        let replies = ["5% Compatible!", "3% Compatible!", "10% Compatible!", "14% Compatible!", "17% Compatible!", "20% Compatible!", "22% Compatible!", "25% Compatible!", "24% Compatible!", "27% Compatible!", "32% Compatible!", "36% Compatible!", "34% Compatible!", "39% Compatible!", "42% Compatible!", "45% Compatible!", "47% Compatible!", "51% Compatible!", "54% Compatible!", "56% Compatible!", "59% Compatible!", "58% Compatible!", "60% Compatible!", "63% Compatible!", "65% Compatible!", "64% Compatible!", "68% Compatible!", "70% Compatible!", "74% Compatible!", "78% Compatible!", "79% Compatible!", "80% Compatible!", "83% Compatible!", "86% Compatible!", "84% Compatible!", "89% Compatible!", "91% Compatible!", "93% Compatible!", "95% Compatible!", "97% Compatible!", "98% Compatible!", "99% Compatible!", "100% Compatible!", "destined to get married."];

        let result = Math.floor((Math.random() * replies.length))
        if (count === 1){
        const embed = new MessageEmbed()
            .setTitle(`Does ${message.author.username} and ${user1.username} match?`)
            .setDescription(`${message.author.username} and ${user1.username} are __**${replies[result]}**__`)
            .setThumbnail('https://i.imgur.com/HywjPEB.png')
            .setColor(0x7732a8);
        }
        if (count === 2){
            const embed2 = new MessageEmbed()
                .setTitle(`Does ${user1.username} and ${user2.username} match?`)
                .setDescription(`${user1.username} and ${user2.username} are __**${replies[result]}**__`)
                .setThumbnail('https://i.imgur.com/HywjPEB.png')
                .setColor(0x7732a8); 
                  
        }
    }
};