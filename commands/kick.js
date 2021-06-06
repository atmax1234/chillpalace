module.exports = {
    name: 'kick',
    aliases: ['k'],
    description: "This command kicks a member!",
    permissions: ["KICK_MEMBERS"],

    execute(message, args, client){
        if(!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('You have no permissions to do that');
            return;
        };

        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('pls mention member witch you need to kick');
            return;
        }

        //Get the highest role of user for compare
        let authorHighestRole = message.member.highestRole.position;
        let mentionHighestRole = mentionMember.highestRole.position;

        //If mention user have same or higher role, so show this error msg
        if(mentionHighestRole >= authorHighestRole) {
            message.channel.send('You can`t kick members with equal or higher position');
            return;
        };

        //Check if your bot can`t kick this user, so that show this error msg 
        if(!mentionMember.kickable) {
            message.channel.send('I have no permissions to kick this user');
            return
        };

        //If all steps are completed successfully try kick this user
        mentionMember.kick()
            .then(() => message.channel.send(`Kicked ${member.displayName}`))
            .catch(err);
    }
}