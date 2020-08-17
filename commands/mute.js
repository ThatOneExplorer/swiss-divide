

module.exports = {
	name: 'mute',
	description: 'Mutes the user',
async	execute(message, prefix, client) {
    const db = require('quick.db')
      const fs = require("fs")
        const Discord = require('discord.js');
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
        const ms = require("ms");
  
        let member = message.mentions.members.first();
        const muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
        
       
      
      let nomuteroleembed = new Discord.MessageEmbed()
       .setTitle(`${message.author.username}, Error`)
       .addFields(
         {name: `No mute role found`, value: `Make a role called "Muted" and deny it perms to send messages in all channels`}
       )
        if(!muterole) 
         return message.channel.send(nomuteroleembed)
      

    


        let RolePermsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username}, Error`) 
        .addFields(

            { name: 'Missing permissions ', value:`You dont have permission to do this`}
        )
        .setTimestamp()


        if(!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(RolePermsEmbed)
        
         let mutevalidmemberembed = new Discord.MessageEmbed()
         .setTitle(`${message.author.username} Error `)
         .setColor('RED')
           .addFields(
             { name:  ` Please enter a valid user`, value:`Who do you want to be muted?` },
           
            )
        

            
        if (!member)
        return message.channel.send (mutevalidmemberembed)
        let userismodembed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} ERROR`)
        .setColor('RED')
        .addFields(
  
          {name: `Unable to mute ${member.user.username}`, value: `That user is a mod or admin`,}
        )
        
        if(member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(userismodembed) 

        let time = args[2];
        let reason = args.slice(3).join(' ');
        let mutes = db.get(`mutes_${message.guild.id}_${member.user.id}`)
        let nomutereasonembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username} ERROR`)
        .addFields(
            {  name: 'No reason given', value:`Please enter a valid reason`}
         )

         let nomutetimeembed = new Discord.MessageEmbed()
         .setColor('RED')
         .setTitle(`${message.author.username} ERROR`)
        .addFields(

          {  name: 'No time given', value:`Please give me a time`}
        )

     
         if(!time)
           return message.channel.send(nomutetimeembed)
     else if (!reason)
           
        return message.channel.send (nomutereasonembed)
        


        if(mutes === null){
          db.set(`mutes_${message.guild.id}_${member.user.id}`, 1 )

member.roles.add(muterole);
         

        
        let muteembed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`Succesfully muted ${member.user.username} for ${time}`)
        .addFields(
          { name:  `Moderator`, value:` ${message.author.username} `, inline: true, },    { name:  `Reason`, value:`${reason}` },
        
         )
         
         message.channel.send(muteembed)
        
        let MuteDMembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`You have been muted in ${message.guild.name} for ${time}`)
        .addFields(
          { name:  `Moderator`, value:`${message.author.username}`, inline: true, },      { name:  `Reason`, value:`${reason}`, inline: true, },
        
         )
         try {
          member.send(MuteDMembed)
        } catch (error) {
          console.error(error);
          message.reply(`${error}`);
        }


        setTimeout(function(){
                
  
          member.roles.remove(muterole);
         let unmutedembed = new Discord.MessageEmbed()
         .setTitle(`You have been unmuted in ${message.guild.name}, you may now talk`)
         try {
          member.send(unmutedembed)
        } catch (error) {
          console.error(error);
          message.reply(`${error}`);
        }
      }, ms(time));
    }
    if(mutes !== null){
      db.add(`mutes_${message.guild.id}_${member.user.id}`, 1)
      
      member.roles.add(muterole);
         
    
          
        
      let muteembed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`Succesfully muted ${member.user.username} for ${time}`)
      .addFields(
        { name:  `Moderator`, value:` ${message.author.username} `, inline: true, },    { name:  `Reason`, value:`${reason}` },
      
       )
       
       message.channel.send(muteembed)
      
      let MuteDMembed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(`You have been muted in ${message.guild.name} for ${time}`)
      .addFields(
        { name:  `Moderator`, value:`${message.author.username}`, inline: true, },      { name:  `Reason`, value:`${reason}`, inline: true, },
      
       )
       try {
        member.send(MuteDMembed)
      } catch (error) {
        console.error(error);
        message.reply(`${error}`);
      }


      setTimeout(function(){
              

        member.roles.remove(muterole);
       let unmutedembed = new Discord.MessageEmbed()
       .setTitle(`You have been unmuted in ${message.guild.name}, you may now talk`)
       try {
        member.send(unmutedembed)
      } catch (error) {
        console.error(error);
        message.reply(`${error}`);
      }
    }, ms(time));
    }



    }
}
