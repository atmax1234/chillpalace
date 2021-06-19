const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'unmute',
    description: "Use to unmute a muted user",
    permissions: ["MUTE_MEMBERS"],
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            if(!mainRole || !muteRole){
                return message.channel.send(new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`Hey buddy! You are missing some roles..Create new roles called Muted & Member`)
              )
            }

            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${memberTarget.user.tag} has been successfully unmuted!`));
        } else{
            message.channel.send(new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`I can\'t find that user..`)
          )
        }
    }
}