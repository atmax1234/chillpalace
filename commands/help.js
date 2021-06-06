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
        .addField('**Main Commands:**', ' ', true)
		.addFields(
		{ name: '**!help**', value: 'Prints all the information about my commands' },
		{ name: '**!addrole <member> <role>**', value: 'You can add a role to a specific member by using this command!' },
		{ name: '**!removerole <member> <role>**', value: 'You can remove a role from a specific member by using this command!' },
		{ name: '**!members**', value: 'See the amount of members in our server!' },
		{ name: '**!suggest <suggestion>**', value: 'Use this command to give us an idea about our server!' },
		)
		.addField('**Fun Commands (More COMING SOON!):**', ' ', true)
		.addFields(
		{ name: '**!8ball <question>**', value: 'Ask me anything!' },
		{ name: '**Marioo**', value: 'If your message contains Marioo it will print something funny :D' },
		{ name: '**!Hello**', value: 'Greeting command :)' },
		{ name: '**!members**', value: 'See the amount of members in our server!' },
		{ name: '**!suggest <suggestion>**', value: 'Use this command to give us an idea about our server!' },
		)
		.addField('**Info Commands**', ' ', true)
		.addFields(
		{ name: '**!botinfo**', value: 'Learn more about me!' },
		{ name: '**!embed**', value: 'Here I was created!' },
		{ name: '**!ping**', value: 'Check out my ping!' },
		{ name: '**!serverinfo***', value: 'Learn more about this server!' },
		{ name: '**!uptime**', value: 'Check out my uptime!' },
		{ name: '**!userinfo**/**!userinfo <user>**', value: 'Prints personal information or information about another member that you mentioned!' },
        );
    }
};