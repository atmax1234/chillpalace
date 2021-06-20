const { MessageEmbed } = require("discord.js");
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Plays random song based on yt engine',
    guildOnly: true,
    usage: "<song name | song url>",
    async execute(message, args, client){
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription(`You need to be in a voice channel to execute this command!`));
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription(`You dont have the correct permissins`));
        if (!permissions.has('SPEAK')) return message.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription(`You dont have the correct permissins`));
        if (!args.length) return message.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription(`Please send a second argument. Use help command for more information!`));
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send(new MessageEmbed()
                .setColor('RED')
                .setDescription(`Leaving voice channel.. :smiling_face_with_tear:`))
            });
 
            await message.reply(`:thumbsup: Now Playing ***Your Link!***`)
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
 
            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        } else {
            message.channel.send('No video results found');
        }
    }
}