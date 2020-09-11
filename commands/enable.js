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
   let welcomemessage = db.get(`welcomemessage_${message.guild.id}`)
   let Welcomechannel = db.get (`welcomechannel_${message.guild.id}`)
    let channel = message.mentions.channels.first();
  
   let logchannel = db.get (`logchannel_${message.guild.id}`)
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


          

          if(modulename ===(`Logs`)) {

            
            let cantset = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username}, Error`)
            .addFields(
                {name: `No channel mentioned`, value: `Please mention the channel you want to be the log channel`}
            )
    
            if(!channel){
                message.channel.send(cantset)
            }

        

           if(logchannel === null)  {

            let setlogchannelembed = new Discord.MessageEmbed()
            .setColor('GREEN')
           .setTitle(`Succesfully set log channel to ${channel.name}`)
            .setDescription(`Set by ${message.author.username}`)
       
            
             await db.set(`logchannel_${message.guild.id}`, channel.id)
                       



         message.channel.send(setlogchannelembed)
           }
     
           if(logchannel !== null){
           await db.delete (`logchannel_${message.guild.id}`)
         db.set(`logchannel_${message.guild.id}`, channel.id)
         
         let setlogchannelembed = new Discord.MessageEmbed()
         .setTitle(`Succesfully set log channel to ${channel.name}`)
         .setDescription(`Set by ${message.author.username}`)
         message.channel.send(setlogchannelembed)
     
     
           }
          }


          
          if(modulename ===(`Welcome`)){

            const welcomemessage2 = args.slice(3).join(' ');
       
 
        

         
             
            let RolePermsEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username}, Error`) 
            .addFields(
    
                { name: 'Missing permissions ', value:`You dont have permission to do this`}
            )
            .setTimestamp()
    
    
            if(!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send(RolePermsEmbed)
   
   
            let cantset = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username}, Error`)
            .addFields(
                {name: `No channel mentioned`, value: `Please mention the channel you want to be the welcome channel`}
            )
    
            if(!channel){
                message.channel.send(cantset)
            }
   
   
   
   
   
            let nomessage = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username}, Error`)
            .addFields(
                {name: `No message given`, value: `Please enter the welcome message to be displayed in your welcome message`}
            )
           
            
                 if(!welcomemessage2){
               return message.channel.send(nomessage)
                 }
        
   
   
       if(Welcomechannel === null){
           db.set(`welcomechannel_${message.guild.id}`, channel.id)
           db.set(`welcomemessage_${message.guild.id}`,`${welcomemessage2}`)
   
           let setmuterole = new Discord.MessageEmbed()
           .setColor('GREEN')
           .setTitle(`Set the welcome channel to ${channel.name}`)
           .addFields(
             {name: `Welcome message:`, value:`${welcomemessage2}`}
           )
          .setDescription(`Set by ${message.author.username}`)
   
          message.channel.send(setmuterole)
   
   
       }
   
        
   
   
          if(Welcomechannel !== null){
              await db.delete(`welcomechannel_${message.guild.id}`)
              db.set(`welcomechannel_${message.guild.id}`, channel.id)
             await db.delete(`welcomemessage_${message.guild.id}`)
             db.set(`welcomemessage_${message.guild.id}`, `${welcomemessage2}`)
             let setmuterole = new Discord.MessageEmbed()
             .setColor('GREEN')
             .setTitle(`Set the welcome channel to ${channel.name}`)
             .addFields(
               {name: `Welcome message:`, value:`${welcomemessage2}`}
             )
            .setDescription(`Set by ${message.author.username}`)
   
              message.channel.send(setmuterole)
          }
        }

        }
      }