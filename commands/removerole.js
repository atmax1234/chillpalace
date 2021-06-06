const { Message } = require('discord.js')

module.exports = {
    name: 'removerole',
    description: "this is a remove command!",
    usage: "type !remove",
    permissions: [],

    execute(message,args, cmd, client, Discord) {
    let guild = message.guild;

    if(!message.member.hasPermission("MANAGE_ROLES")){
    return message.channel.send('You do not have permission.')
    }
    const target = message.mentions.members.first()
    if(!target) return message.channel.send('No member specified')
    const role = message.mentions.roles.first()
    if(!role) return message.channel.send('No role specified')
    target.roles.remove(role)
    message.channel.send(`${target.user.username} has lost his role ( ${role} )`)
    }
};