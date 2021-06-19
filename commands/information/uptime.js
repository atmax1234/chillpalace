const ms = require('ms');

module.exports = {
    name: 'uptime',
    description: "My UpDate Time",

    execute(message, args, client, Discord) {
        message.channel.send(`My uptime is \`${ms(client.uptime, { long: true })}\``);
    }
};