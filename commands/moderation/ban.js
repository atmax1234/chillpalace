const {MessageEmbed} = require('discord.js');
const { prefix } = require('../../config.json');
module.exports = {
  name: 'ban',
  aliases: ['b'],
  description: "Use this command to ban a specified user!",
  args: true,
  usage: "<@user>",
  permissions: ["BAN_MEMBERS"],
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
        .setDescription(`I can't ban ${target} without reason.`)
      )
    }

    if (target.roles.highest >= message.guild.me.roles.highest) {
      return message.channel.send(new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`I can't ban ${target.user.username}, because my role is down from him.`)
      )
    }

    if (target.roles.highest < message.guild.me.roles.highest) {
      try{
        target.ban()
        message.channel.send(new MessageEmbed()
          .setColor('RANDOM')
          // .setDescription(`If you want, you can unban by typing: \n \n ${prefix}unban ${target.id}`)
          .setTitle(`${target.user.username} has been successfully banned from the guild`)
          .addFields({
            name: 'If you want, you can unban by typing:',
            value: `${prefix}unban ${target.id}`
          }, {
            name: 'Moderator: ',
            value: `${message.author.username}`,
            inline: true
          }, {
            name: 'Reason: ',
            value: `${reason}`,
            inline: true
          }, {
            name: 'Duration: ',
            value: 'Forever',
            inline: true
          })
          .setImage(`https://media1.tenor.com/images/459e6388894ecf845ee7db65476d153e/tenor.gif?itemid=16047504`)
          .setFooter(`${message.guild.name} || Executor ${message.author.username} (${message.author.id})`, `${message.guild.iconURL({ dynamic: true })}`)
        )
        // target.ban()
        target.send(new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`${target.user.username} you have been banned !`)
          .addFields({
            name: 'Reason:',
            value: `${reason}`,
            inline: true
          }, {
            name: 'Moderator:',
            value: `${message.author.username}`,
            inline: true
          }, {
            name: 'Duration:',
            value: `Forever`,
            inline: true
          })
        )}
        catch (error){
          message_reply(`There was an error trying to execute that command!`)
        }
    }
  }
}