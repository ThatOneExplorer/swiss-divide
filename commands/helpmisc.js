module.exports = {
	name: 'helpmisc',
	description: 'displays a help message',
	execute(message) { 
        const db = require('quick.db')
        const { prefix } = require('./config.json')
        const Discord = require('discord.js');
   
        let helpmiscembed = new Discord.MessageEmbed()
        .setColor('PURPLE')
            .addFields(
                { name: `${prefix}Serverinfo`, value: `Shows info about the server, **USAGE** ${prefix}Serverinfo`,  }, 
                { name: `${prefix}Say`, value: `repeats a message, **USAGE** ${prefix}Serverinfo`,  }, 
                {name: `${prefix}Suggest`, value: `Suggests something for the bot, **USAGE** ${prefix}Suggest <suggestion>`},
                {name: `${prefix}Remind`, value: `Sets a reminder **USAGE** ${prefix}Remind <time> <reminder>`},
                { name: `${prefix}Userinfo`, value: `Shows info for a user **USAGE** ${prefix}Userinfo OR ${prefix}Userinfo <user>`,  },
                { name: `${prefix}Ping`, value: `Show's the latency **USAGE** ${prefix}Ping`,  }

                 )
                
        message.channel.send(helpmiscembed)
        


    }
}