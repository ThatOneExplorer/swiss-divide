module.exports = {
	name: 'helpmisc',
	description: 'displays a help message',
	execute(message) { 
        const config = require("./config.json");
        const Discord = require('discord.js');
        const prefix = (config.prefix)
        let helpmiscembed = new Discord.MessageEmbed()
        .setColor('PURPLE')
            .addFields(
                { name: `${prefix}Serverinfo`, value: `Shows info about the server, **USAGE** ${prefix}Serverinfo`,  }, 
                { name: `${prefix}Say`, value: `repeats a message, **USAGE** ${prefix}Serverinfo`,  }, 
                {name: `${prefix}Suggest`, value: `Suggests something for the bot, **USAGE** ${prefix}Suggest <suggestion>`},
                {name: `${prefix}Remind`, value: `Sets a reminder **USAGE** ${prefix}Remind <time> <reminder>`}
                 )
                
        message.channel.send(helpmiscembed)
        


    }
}