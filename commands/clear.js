module.exports = {
    name: 'clear',
    aliases: ['purge'],
    description: "This command bans a member!",
    permissions: ["MANAGE_MESSAGES"],

    async execute(message, args, client){
        if(!args[0]) return message.reply(`Please enter the amount of messages that you want to clear!`)
        if(!isNaN(args[0])) return message.reply(`Please provide a real number..`)
        if(args[0] > 100) return message.reply(`You can not delete more than 100 messages!`)
        if(args[0] < 1) return message.reply(`Please delete at least one message!`)
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        });
    }
}