module.exports = {
name: 'kick',
description: 'kicks the user',

async execute (message, prefix) {
  const db = require('quick.db')
  
    const Discord = require('discord.js');
    const args = (message.content.slice(prefix.length).trim().split(/ +/g))
    let member = message.mentions.members.first();
   
      
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

    let missingBotKickPermmisionsEmbed = new Discord.MessageEmbed()
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

    if(!member.kickable) 
    return message.channel.send(missingBotKickPermmisionsEmbed)
    

   
    let reason = args.slice(2).join(' ');
    let kicks = db.get(`kicks_${message.guild.id}_${member.user.id}`)
   
    

   



    let noreasonembed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle(`${message.author.username} Error`)
   .addFields(
    {  name: 'No reason given', value:`Please enter a valid reason`}

   )





    if(!reason) 
    return message.channel.send(noreasonembed)




    console.log(`kick command has been used in ${message.guild.name} by ${message.author.username}`);

    if(kicks === null){
      db.set(`kicks_${message.guild.id}_${member.user.id}`, 1 )
    let kickDMembed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`You have been Kicked from ${message.guild.name}`)
    .addFields( 
      { name: 'Moderator ', value: `${message.author.username}`, inline: true },       { name: 'Kicked for', value: `${reason}`, inline: true },

    )
    
    member.user.send(kickDMembed).catch(e => {message.reply(`There was an error: ${e}`)})
    
 let kicksuccesEmbed = new Discord.MessageEmbed()
 .setThumbnail()
 .setColor('GREEN')
 .setTitle(`Succesfully kicked ${member.user.username}`)
 .addFields(
   { name: 'Moderator ', value: `${message.author.username}`, inline: true },  { name: 'Kicked for', value: `${reason}`, inline: true },
  
 )


message.channel.send(kicksuccesEmbed)
  member.kick(reason).catch(error => message.channel.send(`Sorry ${message.author}, could kick because of: ${error}`));
  
  }
  if(kicks !== null){
    db.add(`kicks_${message.guild.id}_${member.user.id}`, 1)

    let kickDMembed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`You have been Kicked from ${message.guild.name}`)
    .addFields( 
      { name: 'Moderator ', value: `${message.author.username}`, inline: true },       { name: 'Kicked for', value: `${reason}`, inline: true },

    )
    
    member.user.send(kickDMembed).catch(e => {message.reply(`There was an error: ${e}`)})
    

 let kicksuccesEmbed = new Discord.MessageEmbed()
 .setThumbnail()
 .setColor('GREEN')
 .setTitle(`Succesfully kicked ${member.user.username}`)
 .addFields(
   { name: 'Moderator ', value: `${message.author.username}`, inline: true },  { name: 'Kicked for', value: `${reason}`, inline: true },
  
 )


message.channel.send(kicksuccesEmbed)
     member.kick(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick the user: ${error}`));
  
  }

}

}
