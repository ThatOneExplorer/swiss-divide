module.exports = {
	name: 'helpmod',
	description: 'displays a help message',
	execute(message) { 
        const db = require('quick.db')
        const { prefix } = require('./config.json')
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
         { name: `${prefix}Modlogs`, value: `Shows the amount of warns, mutes, kicks and bans a user has**USAGE** ${prefix}Modlogs <user>`},
         { name: `${prefix}Setbanappeal`, value: `Sets a ban appeal link that'll be sent when a user gets banned**USAGE** ${prefix}Setbanappeal <link>`},
         { name: `${prefix}Removeappeal`, value: `Removes an appeal link from the database **USAGE** ${prefix}Removeappeal`},
         { name: `${prefix}Appeallink`, value: `Shows the appeal link set to the guild **USAGE** ${prefix}Appeallink`},
         { name: `${prefix}Setmuterole`, value: `Sets a role that'll be given when a user is muted **USAGE** ${prefix}Setmuterole <@role>`}
         )
      
message.channel.send(helpmodembed)

    }
}