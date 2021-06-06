const { MessageEmbed } = require('discord.js');
const { MessageButton } = require("discord-buttons")

module.exports = {
    name: 'test',
    description: "buttons test",
    usage: "type !test",
    permissions: [],
    async execute(message,args, cmd, client, Discord){
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
}