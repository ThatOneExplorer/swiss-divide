
const db = require('quick.db')
const fs = require("fs")
  const Discord = require('discord.js');
  
  const ms = require("ms");
module.exports = {
	name: 'mute',
	description: 'Mutes the user',
async	execute(message, prefix) {
	const args = message.content.slice(prefix.length).trim().split(/ +/);
  let muteroleid = await db.get(`muterole_${message.guild.id}`)
  const muterolename = muteroleid.name
  const muterole = message.guild.roles.cache.find(role => role.name === `${muterolename}`);
             
      let nomuteroleembed = new Discord.MessageEmbed()
       .setTitle(`${message.author.username}, Error`)
       .addFields(
         {name: `No mute role found`, value: `Please set a role to be the muted role with /setmuterole <role> :)`}
       )

      
      
          if(muterole === null){
          return message.channel.send(nomuteroleembed)
          }


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
        

            
        let member = message.mentions.members.first();
        
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

         let userismuted = new Discord.MessageEmbed()
         .setColor('RED')
        .setTitle(`${message.author.username}, Error`)
        .addFields(
          {name:`Can not mute this user`, value: `Cant mute someone who's already muted`}
        )
        if(message.member.roles.cache.some(r=>["Muted"].includes(r.name))) {
       return message.channel.send(userismuted)
        }
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
member.roles.add(muterole).catch(error => message.reply(`Sorry ${message.author}: ${error}`));

        
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
         
                
         member.user.send(MuteDMembed).catch(e => {message.reply(`There was an error: ${e}`)})
        

        setTimeout(function(){
                
  
          member.roles.remove(muterole);
         let unmutedembed = new Discord.MessageEmbed()
         .setTitle(`You have been unmuted in ${message.guild.name}, you may now talk`)
     
              
         member.user.send(unmutedembed).catch(e => {message.channel.send(`Couldn't send unmute embed to ${member.user.username}: ${e}`)})
       
      }, ms(time));
    
        }
    if(mutes !== null){
      db.add(`mutes_${message.guild.id}_${member.user.id}`, 1)
      member.roles.add(muterole).catch(error => message.reply(`Sorry ${message.author}: ${error}`));
         
    
          
        
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
      
             

 member.user.send(MuteDMembed).catch(e => {message.reply(`There was an error: ${e}`)})





      setTimeout(function(){
              

        member.roles.remove(muterole);
       let unmutedembed = new Discord.MessageEmbed()
       .setTitle(`You have been unmuted in ${message.guild.name}, you may now talk`)
       member.user.send(unmutedembed).catch(e => {message.channel.send(`Couldn't send unmute embed to ${member.user.username}: ${e}`)})

      
 
    }, ms(time));
    
    }



  }


  }

