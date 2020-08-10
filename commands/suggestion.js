module.exports = {
    name: 'suggest',
	description: 'Suggest something',
	async execute(message)  {
                const config = require("./config.json");
        const Discord = require('discord.js');
       
        const args = (message.content.slice(config.prefix.length).trim().split(/ +/g))
        const suggestion = args.slice(1).join(' ');
        if(!suggestion)
        return message.reply(`${message.author.username} Please suggest something`)
        
        let suggestionembed = new Discord.MessageEmbed()
        .setColor(`PURPLE`)
        .setTitle(`Suggestion from ${message.author.username}#${message.author.discriminator}`)
        .addFields(
        {name: `Suggestion`, value: `${suggestion}` }
        )
        
        
        const  GeneralChat = await message.client.channels.fetch("739965475714498651");
        GeneralChat.send(suggestionembed)
        
        let suggestionsentembed = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle(`${message.author.username}, Thank you for your submission!`)
        .addFields(
            {name: `The developer will look over the suggestion soon`, value: `If you have any questions please join  the support server here https://discord.gg/wfQ37TM`}
        )
        message.reply(suggestionsentembed)
        
        }
    }
