const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ship',
    description: 'Calculates the love affinity you have for another person.',
    guildOnly: true,
    usage: "<mention | id | username>",
    async execute(message, args, client){

        let person = message.mentions.members.first() || await message.guild.members.fetch(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                message.guild.members.random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${message.person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}