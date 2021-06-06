const fs = require('fs');
module.exports = (client, Discord) => {
  loadCommands(client.commands, './commands');

  function loadCommands(collection, directory){
      const files = fs.readdirSync(directory);
  
      for (const file of files) { 
          const path=`${directory}/${file}`;
          
          if(file.endsWith('.js')){
              const command = require(path);
              collection.set(command.name, command); 
          }
          else if(fs.lstatSync(path).isDirectory()){
              loadCommands(collection, path);
          }
    };
  };
        const validPermissions = [
            "CREATE_INSTANT_INVITE",
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "ADMINISTRATOR",
            "MANAGE_CHANNELS",
            "MANAGE_GUILD",
            "ADD_REACTIONS",
            "VIEW_AUDIT_LOG",
            "PRIORITY_SPEAKER",
            "STREAM",
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "SEND_TTS_MESSAGES",
            "MANAGE_MESSAGES",
            "EMBED_LINKS",
            "ATTACH_FILES",
            "READ_MESSAGE_HISTORY",
            "MENTION_EVERYONE",
            "USE_EXTERNAL_EMOJIS",
            "VIEW_GUILD_INSIGHTS",
            "CONNECT",
            "SPEAK",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MOVE_MEMBERS",
            "USE_VAD",
            "CHANGE_NICKNAME",
            "MANAGE_NICKNAMES",
            "MANAGE_ROLES",
            "MANAGE_WEBHOOKS",
            "MANAGE_EMOJIS",
          ]
        
          if(command.permissions.length){
            let invalidPerms = []
            for(const perm of command.permissions){
              if(!validPermissions.includes(perm)){
                return console.log(`Invalid Permissions ${perm}`);
              }
              if(!message.member.hasPermission(perm)){
                invalidPerms.push(perm);
              }
            }
            if (invalidPerms.length){
              return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
            }
          }
  }