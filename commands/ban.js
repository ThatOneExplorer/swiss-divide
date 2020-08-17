module.exports = {
	name: 'ban',
	description: 'Bans the user',
	async execute(message, prefix) {
    const db = require('quick.db')
   
        const Discord = require('discord.js');
    
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))

        let member = message.mentions.members.first();
     
        let appeallink = db.get(`appeallink_${message.guild.id}`)


        let RolePermsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username}, Error`) 
        .addFields(
          { name: 'Missing permissions ', value:`You dont have permission to do this`}
        )
        .setTimestamp()
        
        if(!message.member.hasPermission("KICK_MEMBERS"))
          return message.channel.send(RolePermsEmbed)
    

        let validMemberEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .addFields(
          { name: 'No user mentioned', value:`Please mention a valid member of this server` }
        )
        .setTimestamp()
    
        let missingBotBanPermmisionsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username} Error`)
        .addFields(
          { name: 'Missing Bot Permissions', value:`I do not have permissions to ban this user` }
        )
        
    
        if(!member)
        return message.channel.send(validMemberEmbed)
  

       
        let userismodembed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} ERROR`)
        .setColor('RED')
        .addFields(
  
          {name: `Unable to ban ${member.user.username}`, value: `That user is a mod or admin`,}
        )
  
        if(member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(userismodembed)
    
        if(!member.bannable) 
        return message.channel.send(missingBotBanPermmisionsEmbed)
        
    
      
        
        let reason = args.slice(2).join(' ');
        let bans = db.get(`bans_${message.guild.id}_${member.user.id}`)
    
    
    
        let noreasonembed = new Discord.MessageEmbed()
       .setColor('RED')
       .setTitle(`${message.author.username} Error`)
       .addFields(
        {  name: 'No reason given', value:`Please enter a valid reason`}
    
       )
    
    
    
    
    
        if(!reason) 
        return message.channel.send(noreasonembed)
    
        console.log(`ban command has been used in ${message.guild.name} by ${message.author.username}`);

        if(bans === null){
          db.set(`bans_${message.guild.id}_${member.user.id}`, 1 )


        let banDMembedNOLINK = new Discord.MessageEmbed()
       
        .setTitle(`You have been Banned in ${message.guild.name}`)
        .setColor('RED')
        .addFields( 
          { name: 'Moderator', value: `${message.author.username}`, inline: true },       { name: 'Banned for', value: `${reason}`, inline: true },

        )
        let banDMembedWITHLINK = new Discord.MessageEmbed()
       
        .setTitle(`You have been Banned in ${message.guild.name}`)
        .setColor('RED')
        .addFields( 
          { name: 'Moderator', value: `${message.author.username}`, inline: true },       { name: 'Banned for', value: `${reason}`, inline: true },

        )
        .setFooter(` You may appeal here ${appeallink}`)
        if(appeallink === null){
     
          try {
           await member.user.send(banDMembedNOLINK)
          } catch (error) {
            console.error(error);
            message.reply(`There was an error trying to execute that command! ${error} `);
          }
        }
  
     if(appeallink !== null)   {
          try {
          await  member.user.send(banDMembedWITHLINK)
          } catch (error) {
            console.error(error);
            message.reply(`There was an error trying to execute that command! ${error} `);
          }
        }
      
     let bansuccessEmbed = new Discord.MessageEmbed()
     .setThumbnail()
     .setColor('GREEN')
     .setTitle(`Succesfully banned ${member.user.username}`)
     .addFields(
       { name: 'Moderator ', value: `${message.author.username}`, inline: true },  { name: 'Banned for', value: `${reason}`, inline: true },
    
     )

         member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't banbecause of : ${error}`));
        message.channel.send(bansuccessEmbed);
     }
   
 if(bans !== null){
    db.add(`bans_${message.guild.id}_${member.user.id}`, 1)
 
    let banDMembedNOLINK = new Discord.MessageEmbed()
       
        .setTitle(`You have been Banned in ${message.guild.name}`)
        .setColor('RED')
        .addFields( 
          { name: 'Moderator', value: `${message.author.username}`, inline: true },       { name: 'Banned for', value: `${reason}`, inline: true },

        )
        let banDMembedWITHLINK = new Discord.MessageEmbed()
       
        .setTitle(`You have been Banned in ${message.guild.name}`)
        .setColor('RED')
        .addFields( 
          { name: 'Moderator', value: `${message.author.username}`, inline: true },       { name: 'Banned for', value: `${reason}`, inline: true },

        )
        .setFooter(` You may appeal here ${appeallink}`)

      if(appeallink === null){
     
        try {
         await member.user.send(banDMembedNOLINK)
        } catch (error) {
          console.error(error);
          message.reply(`There was an error trying to execute that command! ${error} `);
        }
      }

      if(appeallink !== null)   {
        try {
         await member.user.send(banDMembedWITHLINK)
        } catch (error) {
          console.error(error);
          message.reply(`There was an error trying to execute that command! ${error} `);
        }
      }
     let bansuccessEmbed = new Discord.MessageEmbed()
     .setThumbnail()
     .setColor('GREEN')
     .setTitle(`Succesfully banned ${member.user.username}`)
     .addFields(
       { name: 'Moderator ', value: `${message.author.username}`, inline: true },  { name: 'Banned for', value: `${reason}`, inline: true },
    
     )

         member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't banbecause of : ${error}`));
        message.channel.send(bansuccessEmbed);
    
     
  }









       }
    

    
    
    
}
