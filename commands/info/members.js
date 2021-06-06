const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'members',
    description: "Prints the amount of members in our server!",
    permissions: [],

    async execute(message, args, Discord, client) {

    const a = (client.guilds.cache.get(message.guild.id).memberCount)
    //message.channel.send(a + " members")
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle('Members Count')
    .setDescription('Total Members:' + `${a}`);

    let messageEmbed = await message.channel.send(embed);
    },
};