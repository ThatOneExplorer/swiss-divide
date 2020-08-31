const db = require('quick.db')
 module.exports = {
	name: 'coinflip',
	description: 'heads or tails',
	execute(message) {
        
        const Discord = require('discord.js');
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



 console.log(`Coin flip has been used by ${message.author.username}`)
  const answers = [

  "Heads",
  "Tails"
  ]

  const random = answers[Math.floor (Math.random() * answers.length) ]



  let flipembed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}`)
  .setColor('BLUE')
  .addFields(

  { name: `The coin landed on!`,   value:  `${random}`             }



  )
  return message.channel.send(flipembed)
  }
 }