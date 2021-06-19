const { MessageEmbed } = require('discord.js');

module.exports = {
    name: '8ball',
    description: "Magic Ball! Ask me anything!",
    args: true,
    usage: "<your question>",
    guildOnly: true,
    cooldown: 5,
    execute(message, args, client, Discord) {
    if (!args[1])
        return message.channel.send('Please ask a full question!');
    const replies = ['Da!', 'Ne!', 'Nikoga!', 'Opredeleno.', 'Popitai me po kusno.'];
    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
        const embed = new MessageEmbed()
        .setAuthor('🎱 8ball kazva...')
        .setColor("RANDOM")
        .addField('Question:', question)
        .addField('Answer:', replies[result]);

        message.channel.send(embed);
    }else {
        message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`); // no permissins so bot will default to a raw message
        }
    }
};