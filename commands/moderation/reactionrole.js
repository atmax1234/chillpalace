const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'reactionrole',
    aliases: ['rrole'],
    description: "Sets up a reaction role message!",
    guildOnly: true,
    permissions: ["ADMINISTRATOR"],
    async execute(message, Discord, client) {
        try{
        const channel = message.channel.id;
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "「🙎」𝖫𝖠𝖣𝖨𝖤𝖲");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "「👦」BOYS");
 
        const yellowTeamEmoji = '👩';
        const blueTeamEmoji = '👨';
 
        const embed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose your role!')
            .setDescription('Choosing a role will allow to other people get known of your gender!\n\n'
                + `${yellowTeamEmoji} for Girls team\n`
                + `${blueTeamEmoji} for Boys team`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if(message.author.bot) return
            if(!yellowTeamRole || !blueTeamRole) return message.channel.send('You are missing role(s)')
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                const { guild } = reaction.message
                if (reaction.emoji.name === yellowTeamEmoji) {
                    const member = guild.members.cache.find(member => member.id === user.id);
                    member.roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    const member = guild.members.cache.find(member => member.id === user.id);
                    member.roles.add(blueTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
        catch (error){
            console.log(error);
        }
    }
 
}   