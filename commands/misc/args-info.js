module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	args: true, //Did we expect any args?
	usage: '<args>', //What is the usage of this command then?
	guildOnly: true, //Some commands cannot work in dms for example kick command this determines whether it should only be available outside of servers.
	cooldown: 5, //Well..This is cooldown for the command you want to use for
	aliases: ['args'], //Command shortcut names
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};