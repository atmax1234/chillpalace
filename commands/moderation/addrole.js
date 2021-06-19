const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'addrole',
    description: "You can add a role to specified user",
    args: true,
    usage: "<@user> <@role>",
    guildOnly: true,
    permissions: ["ADMINISTRATOR"],
    execute(message, client, Discord) {
        let guild = message.guild;

        if(!message.member.hasPermission("MANAGE_ROLES")){
           return message.channel.send('You do not have permission.')
        }
        const target = message.mentions.members.first()
        if(!target) return message.channel.send('No member specified')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('No role specified')
        target.roles.add(role)
        message.channel.send(new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`${target.user.username} has obtained a role: ${role.name}`))
    }
};