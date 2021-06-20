const { MessageEmbed } = require('discord.js');
const DisTube = require('distube')
const SpotifyPlugin = require("@distube/spotify")
const distube = new DisTube(client, {
    searchSongs: 10,
    emitNewSongOnly: true,
    plugins: [new SpotifyPlugin({ parallel: true })]
})
module.exports = {
    name: 'spotify-play',
    description: 'Spotify Play',
    aliases: ['spot-p'],
    args: true,
    usage: "<song name>",

    execute(message, args, client){
        distube.play(message, args.join(' '))
    }
}