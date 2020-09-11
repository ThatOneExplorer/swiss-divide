const MessageEmbed = require("discord.js").MessageEmbed
const randomPuppy = require("random-puppy")
const subReddits = require("../subreddits.json").subReddits
const db = require('quick.db')
module.exports = {
    name: "meme",
    description: "meme for days",
    async execute(message){

      let fundisabled = db.get(`disabledfun_${message.guild.id}`)
    


      let fundisabledembed = new Discord.MessageEmbed()
      .setColor('RED')
    
        .addFields(
       {name: `This module is disabled`, value: `Do /enable <module> To re enable this module :)`}
     )

   if(fundisabled !== null){
        return message.channel.send(fundisabledembed)
   }


     




        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
          const img = await randomPuppy(random);
          const embed = new MessageEmbed()
          .setColor('BLUE')
            .setImage(img)
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
            .setTimestamp();
          await message.channel.send(embed);
        }
    }