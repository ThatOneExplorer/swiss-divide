module.exports = {
	name: 'helpmod',
	description: 'displays a help message',
	execute(message) { 
        const db = require('quick.db')
        const { prefix } = require('./config.json');
        const config = require("./config.json");
        const Discord = require('discord.js');

      
let helpmodembed = new Discord.MessageEmbed()
.setColor('GREEN')
    .addFields(
        { name: `${prefix}Mute`, value: `Mutes the user, **USAGE** ${prefix}mute <@user> <@time> <@reason>`,  }, 
         { name: `${prefix}Kick`, value: `Kicks a user from the server **USAGE** ${prefix}kick <@user>  <@reason> `},
         { name: `${prefix}Ban`, value: `Bans a user from the server  **USAGE** ${prefix}ban <@user>  <@reason> `},
         { name: `${prefix}Warn`, value: `Warns a user **USAGE** ${prefix}warn <@user>  <@reason> `},
         { name: `${prefix}Purge`, value: `Deletes a specified amount of messages **USAGE** ${prefix}Purge <amount>`},
         { name: `${prefix}Slowmode`, value: `Sets a rate limit **USAGE** ${prefix}slowmode <time>,, **NOTE TIME HAS TO BE IN SECONDS**`},
         { name: `${prefix}Modlogs`, value: `Shows the amount of warns, mutes, kicks and bans a user has**USAGE** ${prefix}Modlogs <user>`}
         )
      
message.channel.send(helpmodembed)

    }
}