const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

require("discord-buttons")(client);

const welcome = require('./welcome')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

/*client.on('message', message => {
    if (message.content.startsWith("!welcome-sett")) {
     channel = message.channel.id
    }
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'pedal');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(channel).send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});*/

client.on("message", async (message) => {
    if(!message.guild || message.author.bot || !message.content.trim().startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(" ")
    const cmd = args.shift().toLowerCase()
    if(cmd == "test"){
        let firstbutton = new MessageButton().setStyle("green").setID("1").setLabel("<")
        let secondbutton = new MessageButton().setStyle("blurple").setID("2").setLabel(">")
        let thirdbutton = new MessageButton().setStyle("red").setID("3").setLabel("JUMP TO OVERVIEW")
        let linkingbutton = new MessageButton().setStyle("url").setLabel("JUMP TO OVERVIEW").setURL("http://milrato.eu")
            
        var buttonarray = [firstbutton, secondbutton, thirdbutton, linkingbutton]
        let overviewembed = new MessageEmbed().setColor("RANDOM").setDescription("OVERVIEW LOL")
            
            
        let mybuttonsmsg = await message.channel.send({ embed: overviewembed, buttons: buttonarray })
            
        var embedsarray = [overviewembed]
        for(let i = 0; i < 5; i++)
            embedsarray.push( new MessageEmbed().setColor("RANDOM").setDescription(i))

        var currentPage = 0;

        const collector = mybuttonsmsg.createButtonCollector((button)=> button.clicker.user.id === message.author.id, {time: 60e3});
            
        collector.on("collect", (b) => {
            b.defer();
            if(b.id == "3"){
                currentPage = 0;
                mybuttonsmsg.edit({ embed: embedsarray[currentPage], buttons: buttonarray })
            }
            else if(b.id == "1"){
                if(currentPage !== 0){
                    --currentPage;
                    mybuttonsmsg.edit({ embed: embedsarray[currentPage], buttons: buttonarray })
                }else {
                    currentPage = embedsarray.length - 1;
                    mybuttonsmsg.edit({ embed: embedsarray[currentPage], buttons: buttonarray })
                }
            }
            else if(b.id == "2"){
                if(currentPage < embedsarray.length - 1){
                    currentPage++;
                    mybuttonsmsg.edit({ embed: embedsarray[currentPage], buttons: buttonarray })
                }else {
                    currentPage = 0;
                    mybuttonsmsg.edit({ embed: embedsarray[currentPage], buttons: buttonarray })
                }
            }
        })
    }
    else if (cmd == "toggle") {
        let mybutton = new MessageButton().setStyle("green").setID("1").setLabel("ENABLE")
        let mybuttonsmsg = await message.channel.send("Testing information message",{ buttons: [mybutton] })
        const collector = mybuttonsmsg.createButtonCollector((button)=> button.clicker.user.id === message.author.id, {time: 60e3});
        collector.on("collect", (b) => {
            console.log(b.id)
            b.defer();
            if(b.id == "1"){
                let mybutton2 = new MessageButton().setStyle("red").setID("2").setLabel("Disable")
                mybuttonsmsg.edit("Testing information message", { buttons: [mybutton2] })
            }
            else if(b.id == "2"){
                mybuttonsmsg.edit("Testing information message", { buttons: [mybutton] })
            }
        })
    }
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.token);
welcome(client)