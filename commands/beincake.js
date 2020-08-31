const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: `beincake`,

 async execute(message, args) {


  let fundisabled = db.get(`disabledfun_${message.guild.id}`)
    


  let fundisabledembed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(`${message.author.username}, Error`)
 .addFields(
   {name: `This module is disabled`, value: `Do /enable <module> To re enable this module :)`}
 )

if(fundisabled !== null){
    return message.channel.send(fundisabledembed)
}









    let member = message.mentions.members.first();
   let comment = args.slice(1).join(' ');
   
    let validMemberEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .addFields(
      { name: 'No user mentioned', value:`Please mention a valid member of this server` }
    )
    .setTimestamp()

    
    if(!member)
    return message.channel.send(validMemberEmbed)


    let beancakesent = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Sent beincake to ${member.user.username}`)
    .setDescription(`Sent by ${message.author.username}`)



let beincakeembednocomment = new Discord.MessageEmbed()
.setColor('ORANGE')
.setTitle(`${message.author.username} sent you a sexy beincake.`)
.setImage(`https://cdn.discordapp.com/attachments/735037492918747248/744975312911335554/0js7yr4lfyp11.png`)

if(!comment){
     return message.channel.send(`Enter a comment, dont send them a cake with no meaning :c
     `)
}

let beancakeembedwithcomment = new Discord.MessageEmbed()
.setColor('ORANGE')
.setTitle(`${message.author.username} sent you a sexy beincake, ${comment}`)
.setImage(`https://cdn.discordapp.com/attachments/735037492918747248/744975312911335554/0js7yr4lfyp11.png`)


   member.user.send(beancakeembedwithcomment).catch(e => {message.channel.send(`Couldn't send beincake to ${member.user.username}: ${e}`)})
   message.channel.send(beancakesent)




 }
}