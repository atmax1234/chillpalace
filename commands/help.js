const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Prints all the information about my commands",
    usage: "type !help",
    permissions: [],
    
    execute(message,args, cmd, client, Discord){
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Thoose are my commands:')
        .setDescription(`**Main Commands:**\n\n
        **!help** - Prints all the information about my commands\n
        **!addrole <member> <role>** - You can add a role to a specific member by using this command!\n
        **!removerole <member> <role>** - You can remove a role from a specific member by using this command!\n
        **!members** - Check the amount of members in our server!\n
        **!suggest <suggestion>** - Use this command to give us an idea about our server!\n\n
        **Fun Commands (More COMING SOON!):**\n\n
        **!8ball <question>** - Ask me anything!\n
        **!Hello** - Greeting command :)\n\n
        **Info Commands**\n\n
        **!botinfo** - Learn more about me!\n
        **!embed** - Here I was created!\n
        **!ping** - Check out my ping!\n
        **!serverinfo** - Learn more about this server!\n
        **!uptime** - Check out my uptime!\n
        **!userinfo**/**!userinfo <user>** - Prints personal information or information about another member!
        `);
        message.channel.send(embed)
    }
};