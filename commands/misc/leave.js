const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'leave',
    description: 'Leaves the voice channel after playing a song',
    guildOnly: true,
    async execute(message, args, client){
        const voiceChannel = message.member.voice.channel;
         
        if(!voiceChannel) return message.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription(`You need to be in a voice channel to stop the music!`))
        await voiceChannel.leave();
        await message.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription(`Leaving voice channel.. :smiling_face_with_tear:`))
    }
}