const { MessageEmbed, DiscordAPIError } = require("discord.js")

module.exports = {
	name: 'avatar',
	description: 'Shows your avatar or the avatar of the mentioned person',
	usage: " / <command> <@user>",
    aliases: ['av', 'pfp'],
	guildOnly: true,
	execute(message, args) {
		if (!message.mentions.users.size) {
			const embed = new MessageEmbed()
				.setTitle(message.author.username)
				.setColor(0x00ffff)
				.setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 128 }));
			return message.channel.send(embed)
		}

		const mention = message.mentions.members.first();
		const Embed = new MessageEmbed()
			.setTitle(message.mentions.users.first().username)
			.setColor(0x00ffff)
			.setImage(mention.user.displayAvatarURL({ format: 'png', dynamic: true, size: 128 }));
		return message.channel.send(Embed);
	}
};