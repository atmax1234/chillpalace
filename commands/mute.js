const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    permissions: ["MUTE_MEMBERS"],
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            if(!mainRole || !muteRole) return message.channel.send(`Hey buddy! You are missing some roles!`)

            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`${memberTarget.tag} has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${memberTarget.tag} has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        }
        else {
            message.channel.send('Something went wrong!');
        }
        if(target.id == message.author.id) return message.channel.send(`Are you trying to mute yourself!? What is wrong with you?`)
    }
}