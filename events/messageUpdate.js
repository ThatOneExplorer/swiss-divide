const db = require('quick.db')
const Discord = require('discord.js')

module.exports = async (oldMessage, newMessage)  => {

    let logchannel = await db.get (`logchannel_${newMessage.guild.id}`)
    
                    
    
    if(logchannel === null) 
     return;
     if (newMessage.author.bot) return;
    
     if(!oldMessage)
     return;



        let embed = new Discord.MessageEmbed()
          .setTitle(`Message Edited`)
          .setColor('ORANGE')
          .addFields(
            {name: `Message Author`, value: `**${newMessage.author.username}#${newMessage.author.discriminator}**`},
            {name: `Message Author ID`, value: `${newMessage.author.id}`},
               {name: `Old message`, value: `${oldMessage.content}`},
               {name: `New message`, value: `${newMessage.content}`},
               {name: `Message ID`, value: `${newMessage.id}`},
              {name: `Channel`, value: `${newMessage.channel.name}`},
          )
      
          const LogChannel = await oldMessage.client.channels.fetch(logchannel);
     
        LogChannel.send(embed).catch(e => {guildowner.user.send(`Couldn't log deleted message, please report this error by joining the support server  https://discord.gg/wfQ37TM: ${e}`)})
          }

   
