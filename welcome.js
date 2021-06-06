const { MessageEmbed } = require("discord.js")

module.exports = client => {
    client.on('guildMemberAdd', (member) =>{
        const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome');
        if(!channel) return;
        const welcomeEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('ChillPalace')
        .setTitle('Welcome!')
        .setDescription(`<@${member} just joined the server! Make sure to read #rules!`)
        .setThumbnail(message.user.avatarURL)
        .setFooter('Have fun!')
        .setTimestamp();

    channel.send(welcomeEmbed);
    })
}