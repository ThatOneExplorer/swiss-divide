module.exports = {
	name: '8ball',
	description: 'The bots invite link',
	execute(message) { 
        const db = require('quick.db')
        const { prefix } = require('./config.json');
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
        const config = require("./config.json");
        const Discord = require('discord.js');
        const ballmessage = args.slice(1).join(' ');
        const answers = [
        
        "Yes",
        "No",
        "Mabye",
        "Definetly",
        "Nope",
        "Ask again..."
        ]
        
        const random = answers[Math.floor (Math.random() * answers.length) ]
        
        let noquestionembed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`${message.author.tag}, please ask me a question`)
        
        if(!ballmessage)  return message.channel.send(noquestionembed)
        
        
        let ballembed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}, You have asked the 8 ball ${ballmessage}`)
        .setColor('BLUE')
        .addFields(
        
        { name: `My reply is!`,   value:  `${random}`             }
        
        
        
        )
        return message.channel.send(ballembed)
        
    }
}