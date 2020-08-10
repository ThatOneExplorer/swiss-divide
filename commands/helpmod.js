module.exports = {
	name: 'helpmod',
	description: 'displays a help message',
	execute(message) { 
        const config = require("./config.json");
        const Discord = require('discord.js');

        const prefix = (config.prefix)
let helpmodembed = new Discord.MessageEmbed()
.setColor('GREEN')
    .addFields(
        { name: `${prefix}Mute`, value: `Mutes the user, **USAGE** ${prefix}mute <@user> <@time> <@reason>`,  }, 
         { name: `${prefix}Kick`, value: `Kicks a user from the server **USAGE** ${prefix}kick <@user>  <@reason> `},
         { name: `${prefix}Ban`, value: `Bans a user from the server  **USAGE** ${prefix}ban <@user>  <@reason> `},
         { name: `${prefix}Warn`, value: `Warns a user **USAGE** ${prefix}warn <@user>  <@reason> `},
         { name: `${prefix}Purge`, value: `Deletes a specified amount of messages **USAGE** ${prefix}Purge <amount>`},
         { name: `${prefix}Slowmode`, value: `Sets a rate limit **USAGE** ${prefix}slowmode <time>,, **NOTE TIME HAS TO BE IN SECONDS**`}
         )
      
message.channel.send(helpmodembed)

    }
}