const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: `disable`,
    description: `disables certain modules`,
    async execute(message, prefix) {
         
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))

        let modulename = args[1]


         let nomodule = new Discord.MessageEmbed()
         .setColor('RED')
         .setTitle(`${message.author.username}, Error`)
         .addFields(
             {name: `No module name`, value: `What module do you want disabled?`}
         )

         let RolePermsEmbed = new Discord.MessageEmbed()
         .setColor('RED')
         .setTitle(`${message.author.username}, Error`) 
         .addFields(
           { name: 'Missing permissions ', value:`You dont have permission to do this`}
         )
         .setTimestamp()

         if(!message.member.hasPermission("ADMINISTRATOR"))
         return message.channel.send(RolePermsEmbed)
   if(!modulename)
   return message.channel.send(nomodule)


        let moddisabled = db.get(`moddisabled_${message.guild.id}`)
        let fundisabled = db.get(`disabledfun_${message.guild.id}`)
        let nsfwdisabled = db.get(`disablednsfw_${message.guild.id}`)
        let utilitydisabled = db.get(`disabledutility_${message.guild.id}`)
        let moduledisabled = new Discord.MessageEmbed()
        .setColor('ORANGE')
         .setTitle(`Succesfully Disabled ${modulename} module`)
           .setDescription(`Disabled by ${message.author.username}`)
    

           if(modulename ===(`Moderation`)){
            db.set(`moddisabled_${message.guild.id}`, true)
          return message.channel.send(moduledisabled)
         }

           if (modulename ===(`Fun`)){
            db.set(`disabledfun_${message.guild.id}`, true)
  
          return message.channel.send(moduledisabled)
          }

          if (modulename ===(`NSFW`)) {
            db.set(`disablednsfw_${message.guild.id}`, true)
            return message.channel.send(moduledisabled)
          }


          if (modulename ===(`Utility`)) {
            db.set(`disabledutility_${message.guild.id}`, true)
            return message.channel.send(moduledisabled)
          }
        }
    }

