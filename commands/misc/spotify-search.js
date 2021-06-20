const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'spotify-search',
    description: 'Spotify Search',
    aliases: ['spot-s'],
    args: true,
    usage: "<song name>",

    execute(message, args, client, Discord){
        let msglink = args.join('%20')
        let msg = args.join(' ')
        if(!args[0]) return message.channel.send('Please give me a song name to search')

        let embed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`[${msg}](https://open.spotify.com/search/${msglink})`)
            message.channel.send(embed)
        }
}