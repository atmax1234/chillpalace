module.exports = {
    name: 'kick',
    aliases: ['k'],
    description: "This command kicks a member!",
    permissions: ["KICK_MEMBERS"],

    execute(message, args){
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            return message.channel.send('You do not have the permission for kick users!');
        }
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("I don’t have the permission for kick users!");
        }
        if (message.mentions.users.size === 0) {
            return message.channel.send("You need to ping a user or the user can't be found!");
        }
        var member = message.mentions.members.first();
        member
            .kick()
            .then(member => {
                message.channel.send(member.displayName + " has been successfully kicked");
            })
            .catch(() => {
                message.channel.send("Sorry, you can't kick this member");
            });
    }
}