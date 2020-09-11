const db = require('quick.db')
const Discord = require('discord.js')

module.exports = async message  => {

    let logchannel = db.get (`logchannel_${message.guild.id}`)



    if(!logchannel) 
     return;
    
     if(message === Discord.MessageEmbed) {
        return;
     }
if(message.bulkDelete)
      return;

      if(message.author.bot)return;


   let messagedeletedembed = new Discord.MessageEmbed()
   .setColor('ORANGE')
   .setTitle(`Message deleted`)
   .addFields(
    {name: `Message Author`, value: `**${message.author.username}#${message.author.discriminator}**`},
    {name: `Message Author ID`, value: `${message.author.id}`},
       {name: `Message content`, value: `${message.content}`},
       {name: `Message ID`, value: `${message.id}`},
      {name: `Channel`, value: `${message.channel.name}`},
     
   )
.setTimestamp()
const  LogChannel = await message.client.channels.fetch(logchannel);
   LogChannel.send(messagedeletedembed).catch(e => {guildowner.send.send(`Couldn't log deleted message, please report this error by joining the support server  https://discord.gg/wfQ37TM: ${e}`)})
 

}