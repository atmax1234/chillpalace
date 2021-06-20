const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'Flipin the coin',
    execute(message, args, client){
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Heads';
        else result = 'Tails';
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(`https://www.pngkey.com/png/detail/9-99943_coin-toss-heads-or-tails-coin-flip-png.png`)
            .setDescription(`**${message.member.displayName} Flipped ${result}**!`)
        message.channel.send(embed);
    }
}