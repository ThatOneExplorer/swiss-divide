module.exports = {
	name: 'helpfun',
	description: 'displays a help message',
	execute(message) { 
        const db = require('quick.db')
        const { prefix } = require('./config.json');
      
        const Discord = require('discord.js');

       
let helpfunembed = new Discord.MessageEmbed()
.setColor('BLUE')
.addFields(
    { name: `${prefix}8ball`, value: `Gives a random response, **USAGE** ${prefix}8Ball <Question>`,  },
    { name: `${prefix}Waddle`, value: `Sends a random penguin image, **USAGE** ${prefix}Waddle`,  },
 { name: `${prefix}Coinflip`, value: `Heads or tails? **USAGE** ${prefix}Coinflip`,  },
 { name: `${prefix}Croissant`, value: `Would you like a croissant? **USAGE** ${prefix}Croissant`,  },
 { name: `${prefix}Slap`, value: `Now you can finally slap that person!!! **USAGE** ${prefix}Slap <user>`,  }


)
message.channel.send(helpfunembed)

    }
}