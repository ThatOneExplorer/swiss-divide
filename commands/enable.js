const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: `enable`,
    description: `enables certain modules`,
    async execute(message, prefix) {
         
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))

        let modulename = args[1]


         let nomodule = new Discord.MessageEmbed()
         .setColor('RED')
         .setTitle(`${message.author.username}, Error`)
         .addFields(
             {name: `No module name`, value: `What module do you want enabled?`}
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


   let moddisabled = db.get(`disabledmod_${message.guild.id}`)
   let fundisabled = db.get(`disabledfun_${message.guild.id}`)
   let nsfwdisabled = db.get(`disablednsfw_${message.guild.id}`)
   let utilitydisabled = db.get(`disabledutility_${message.guild.id}`)

        let moduleenabled = new Discord.MessageEmbed()
        .setColor('ORANGE')
         .setTitle(`Succesfully Enabled ${modulename} module`)
           .setDescription(`Enabled by ${message.author.username}`)
    

           if(modulename ===(`Moderation`)){
            db.delete(`moddisabled_${message.guild.id}`)
          return message.channel.send(moduleenabled)
         }

           if (modulename ===(`Fun`)){
            db.delete(`disabledfun_${message.guild.id}`)
  
          return message.channel.send(moduleenabled)
          }

          if (modulename ===(`NSFW`)) {
            db.delete(`disablednsfw_${message.guild.id}`)
            return message.channel.send(moduleenabled)
          }

          if (modulename ===(`Utility`)) {
            db.delete(`disabledutility_${message.guild.id}`)
            return message.channel.send(moduleenabled)
          }
        }
    }

