const Discord = require('discord.js')


module.exports = {
    name: `beincake`,

 async execute(message) {

    let member = message.mentions.members.first();



   
    let validMemberEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .addFields(
      { name: 'No user mentioned', value:`Please mention a valid member of this server` }
    )
    .setTimestamp()

    
    if(!member)
    return message.channel.send(validMemberEmbed)


let beancakeembed = new Discord.MessageEmbed()
.setColor('ORANGE')
.setTitle(`${message.author.username} sent you a sexy beincake`)
.setImage(`https://cdn.discordapp.com/attachments/735037492918747248/744975312911335554/0js7yr4lfyp11.png`)


   member.user.send(beancakeembed).catch(e => {message.channel.send(`Couldn't send unmute embed to ${member.user.username}: ${e}`)})



let beancakesent = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(`Sent beincake to ${member.user.username}`)
.setDescription(`Sent by ${message.author.username}`)

message.channel.send(beancakesent)
 }
}