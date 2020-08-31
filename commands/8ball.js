module.exports = {
	name: '8ball',
	description: 'The bots invite link',
	execute(message, prefix) { 
        const db = require('quick.db')
        
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))


      
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


     let fundisabled = db.get(`disabledfun_${message.guild.id}`)
    


        let fundisabledembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username}, Error`)
       .addFields(
         {name: `This module is disabled`, value: `Do /enable <module> To re enable this module :)`}
       )

     if(fundisabled !== null){
          return message.channel.send(fundisabledembed)
     }

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