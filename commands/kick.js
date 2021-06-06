module.exports = {
    name: 'kick',
    aliases: ['k'],
    description: "This command kicks a member!",
    permissions: ["KICK_MEMBERS"],

    execute(message, args){
        const target = message.mentions.users.first();
        if(!args[0]) return message.channel.send(`Please provide a user! For more information use help command!`)
        if(!target) return message.channel.send(`Something went wrong, please try again!`);
        else if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(`${target} has been kicked`);
        }
    }
}