module.exports = client => {
    client.on('guildMemberAdd', (member) =>{
        client.channels.cache.find(channel => channel.name === "Welcome");
        const message = `Welcome <@${member.id}> to our server! Make sure to check out the rules channel!`
        channel.send(message)
    })
}