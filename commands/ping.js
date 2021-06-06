const ws = require('ws')

module.exports =  {
    name: 'ping',
    description: "this is a ping command!",
    usage: "type !ping",
    cooldown: 10.0,
    permissions: [],

    execute(message,args, cmd, client, Discord){
        const msg = message.channel.send('Pinging...').then((msg)=>{

		const latency = msg.createdTimestamp - message.createdTimestamp;
		const choices = ['Is this really my ping?', 'Is this okay? I can\'t look!', 'I hope it isn\'t bad!'];
		const response = choices[Math.floor(Math.random() * choices.length)];
        
        msg.edit(`${response} - Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(client.ws.ping)}ms\``);
        }
        )}
};