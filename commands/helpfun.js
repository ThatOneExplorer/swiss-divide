module.exports = {
	name: 'helpfun',
	description: 'displays a help message',
	execute(message) { 
        const db = require('quick.db')
        const { prefix } = require('./config.json')
      
        const Discord = require('discord.js');

       
let helpfunembed = new Discord.MessageEmbed()
.setColor('BLUE')
.addFields(
    { name: `${prefix}8ball`, value: `Gives a random response, **USAGE** ${prefix}8Ball <Question>`,  },
    { name: `${prefix}Waddle`, value: `Sends a random penguin image, **USAGE** ${prefix}Waddle`,  },
 { name: `${prefix}Coinflip`, value: `Heads or tails? **USAGE** ${prefix}Coinflip`,  },
 { name: `${prefix}Croissant`, value: `Would you like a croissant? **USAGE** ${prefix}Croissant`,  },
 { name: `${prefix}Slap`, value: `Now you can finally slap that person!!! **USAGE** ${prefix}Slap <user>`,  },
 { name: `${prefix}Hug`, value: `Hugs a user you love owo **USAGE** ${prefix}Hug <user>`  },
 { name: `${prefix}Vibecat`, value: `Vibe cat :sunglasses: **USAGE** ${prefix}Vibecat `  },
 { name: `${prefix}Beincake`, value: `Beincake **USAGE** ${prefix}Beincake`  },
 { name: `${prefix}Asmr`, value: `Sexy asmr video **USAGE** ${prefix}Asmr **NSFW**`  },
 { name: `${prefix}Cup`, value: `A documentary about how two girls got stuck in one cup **USAGE** ${prefix}Cup **NSFW**`  },
 { name: `${prefix}Poop`, value: `A poopoo song **USAGE** ${prefix}Poop **NSFW**`  },
 { name: `${prefix}Mork`, value: `Show's an intresting but true fact **USAGE** ${prefix}Mork`  },
 { name: `${prefix}Fact`, value: `Fun / not so fun facts! **USAGE** ${prefix}Fact`  }







)
message.channel.send(helpfunembed)

    }
}