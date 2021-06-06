module.exports = client => {
    client.on('guildMemberAdd', (member) =>{
        let channel = message.channel.guild.channels.cache.find((channel) => channel.name.toLowerCase() === `welcome`)
        const message = `Welcome <@${member.id}> to our server! Make sure to check out the rules channel!`
        channel.send(message)
    })
}