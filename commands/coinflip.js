
 module.exports = {
	name: 'coinflip',
	description: 'heads or tails',
	execute(message) {
        const config = require("./config.json");
        const Discord = require('discord.js');
        const { prefix } = require('./config.json');
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