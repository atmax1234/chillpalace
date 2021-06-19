const ms = require('ms');
const {MessageEmbed} = require('discord.js');

module.exports = {
    name: 'mute',
    description: "Use to mute a member",
    permissions: ["MUTE_MEMBERS"],
    guildOnly: true,
    permissions: ["MUTE_MEMBERS"],
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            if(!mainRole || !muteRole){
                return message.channel.send(new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`Hey buddy! You are missing some roles..Create new roles called Muted & Member`)
              )
            }

            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`${memberTarget.tag} has been successfully muted!`)
                .addFields({
                  name: 'Moderator: ',
                  value: `${message.author.username}`,
                  inline: true
                }, {
                  name: 'Time: ',
                  value: `Forever`,
                  inline: true
                })
                .setImage(`https://media1.tenor.com/images/85ae181a9b4edaf4430dbd700476aec5/tenor.gif?itemid=16674862`)
                .setFooter(`${message.guild.name} || Executor ${message.author.username} (${message.author.id})`, `${message.guild.iconURL({ dynamic: true })}`)
              );
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${memberTarget.tag} has been successfully muted!`)
            .addFields({
              name: 'Moderator: ',
              value: `${message.author.username}`,
              inline: true
            }, {
              name: 'Time: ',
              value: `${ms(ms(args[1]))}`,
              inline: true
            })
            .setImage(`https://media1.tenor.com/images/85ae181a9b4edaf4430dbd700476aec5/tenor.gif?itemid=16674862`)
            .setFooter(`${message.guild.name} || Executor ${message.author.username} (${message.author.id})`, `${message.guild.iconURL({ dynamic: true })}`)
          );
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        }
        else {
            message.channel.send('Something went wrong!');
        }
        if(target == message.author) return message.channel.send(`Are you trying to mute yourself!? What is wrong with you?`)
    }
}