module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    permissions: ["MUTE_MEMBERS"],
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
            if(!mainRole || muteRole) return message.channel.send(`Hey buddy! You are missing some roles!`)

            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`${memberTarget.user.id} has been unmuted`);
        } else{
            message.channel.send('Cant find that member!');
        }
    }
}