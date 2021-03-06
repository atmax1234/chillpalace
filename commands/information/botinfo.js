const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = {
    name: 'botinfo',
    description: "My personal information!",
    usage: "Simply type the prefix + command",
	
    execute(message, args, client, Discord) {
		this.client = client;
		const core = os.cpus()[0];
		const embed = new MessageEmbed()
			.setThumbnail(this.client.user.displayAvatarURL())
			.setColor(message.guild.me.displayHexColor || 'BLUE')
			.addField('General', [
				`**❯ Client:** ${this.client.user.tag} (${this.client.user.id})`,
				`**❯ Commands:** ${this.client.commands.size}`,
				`**❯ Servers:** ${this.client.guilds.cache.size.toLocaleString()} `,
				`**❯ Users:** ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**❯ Channels:** ${this.client.channels.cache.size.toLocaleString()}`,
				`**❯ Creation Date:** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Version:** v${version}`,
				`**❯ Discord.js:** v${djsversion}`,
				'\u200b'
			])
			.addField('System', [
				`**❯ Platform:** ${process.platform}`,
				`**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
				`**❯ CPU:**`,
				`\u3000 Cores: ${os.cpus().length}`,
				`\u3000 Model: ${core.model}`,
				`\u3000 Speed: ${core.speed}MHz`,
			])
			.setTimestamp();

		message.channel.send(embed);
    }
};