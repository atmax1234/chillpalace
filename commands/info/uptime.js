const ms = require('ms');

module.exports = {
    name: 'uptime',
    description: "this is a uptime command!",
    usage: "type !uptime",
    permissions: [],

    execute(message,args, cmd, client, Discord) {
        message.channel.send(`My uptime is \`${ms(client.uptime, { long: true })}\``);
    }
};