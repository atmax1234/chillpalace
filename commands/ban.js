module.exports = {
    name: 'ban',
    aliases: ['b'],
    description: "This command bans a member!",
    permissions: ["BAN_MEMBERS"],

    execute(message, args, client){
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Kick the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             */
            member
              .ban()
              .then(member => {
                guild.members.ban(id);
                message.channel.send("*It's a plane* :airplane:, *no its a bird* :bird:, *wait no its just* **" + member.displayName + "** *getting banned :hammer:*");
            })
            .catch(() => {
                message.channel.send("Sorry, you can't ban this member");
            });
          } else {
            // The mentioned user isn't in this guild
            message.reply("That user isn't in this guild!");
          }
          // Otherwise, if no user was mentioned
        } else {
          message.reply("You didn't mention the user to ban!");
        }
    }
};