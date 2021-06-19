const {MessageEmbed} = require('discord.js');
const { prefix } = require('../../config.json');
module.exports = {
  name: 'kick',
  aliases: ['k'],
  description: "Use this command to kick a specified user!",
  args: true,
  usage: "<@user>",
  permissions: ["KICK_MEMBERS"],
  guildOnly: true,

  execute(message, args, client) {
    if (!message.member.hasPermission('MANAGE_ROLES')) {
      return message.channel.send(`You don't have permission for that`)
    }
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) {
      return message.channel.send(`I don't have required permissions`)
    }

    const target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription(`That Target is not valid.`)
      )
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(new MessageEmbed()
        .setColor('YELLOW')
        .setDescription(`I can't kick ${target} without reason.`)
      )
    }

    if (target.roles.highest >= message.guild.me.roles.highest) {
      return message.channel.send(new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`I can't kick ${target.user.username}, because my role is down from him.`)
      )
    }

    if (target.roles.highest < message.guild.me.roles.highest) {
      try{
        target.kick()
        message.channel.send(new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`${target.user.username} has been successfully kicked from the guild`)
          .addFields({
            name: 'Moderator: ',
            value: `${message.author.username}`,
            inline: true
          }, {
            name: 'Reason: ',
            value: `${reason}`,
            inline: true
          })
          .setImage(`https://media1.tenor.com/images/ffebfc037d88998fe4a6e85a08c5e13b/tenor.gif?itemid=15175869`)
          .setFooter(`${message.guild.name} || Executor ${message.author.username} (${message.author.id})`, `${message.guild.iconURL({ dynamic: true })}`)
        )
        target.send(new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`${target.user.username} you have been kicked !`)
          .addFields({
            name: 'Reason:',
            value: `${reason}`,
            inline: true
          }, {
            name: 'Moderator:',
            value: `${message.author.username}`,
            inline: true
          })
        )}
        catch (error){
          message_reply(`There was an error trying to execute that command!`)
        }
    }
  }
}