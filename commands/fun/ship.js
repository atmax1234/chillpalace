const { MessageEmbed } = require("discord.js");
const { getMember } = require('../../shipfunc.js')

module.exports = {
    name: 'ship',
    description: 'Calculates the love affinity you have for another person.',
    guildOnly: true,
    usage: "<mention | id | username>",
    async execute(message, args, client){

        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.user.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}