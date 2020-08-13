

module.exports = {
	name: 'croissant',
	description: 'Bans the user',
	execute(message) {
    const db = require('quick.db')
    const { prefix } = require('./config.json');
        const Discord = require('discord.js');
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
  const croissants = [

  "https://cdn.discordapp.com/attachments/730523779972726794/739959575222026424/JPEG_20200713_101759.jpg",
   "https://cdn.discordapp.com/attachments/730523779972726794/739959575599644732/Croissant-1.png",
   "https://cdn.discordapp.com/attachments/730523779972726794/739959576090116136/095088-600x600-A.jpg",
   "https://cdn.discordapp.com/attachments/730523779972726794/739959576383848539/mini-croissant-cereal-bites.jpg",
   "https://cdn.discordapp.com/attachments/730523779972726794/739959576689901798/le-croissant_1522178196499_10827988_ver1-0-1024x576.jpg",
   "https://cdn.discordapp.com/attachments/730523779972726794/739959577340018738/IMG_2801-easy-croissants-recipe-720x1080-1.jpg",
    "https://cdn.discordapp.com/attachments/730523779972726794/739959577549865141/cornetti-italian-croissants-24713-1.jpg",
    "https://cdn.discordapp.com/attachments/730523779972726794/739959577981878282/32810_sfs-croissants-14.jpg"


  ]

  const random = croissants[Math.floor (Math.random() * croissants.length) ]


  let randomcroissantembed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}, Croissant!`)
.setColor('BLUE')
.setImage(random)
 

  message.channel.send(randomcroissantembed)



    }
}