const db = require('quick.db')
const Discord = require('discord.js')
const mute = require('./mute')
const kick = require('./kick')

module.exports = {
name: 'modlogs',
description: 'Gets a list of moderative action thats been taken on the user',
async execute (message) { 
    const member = message.mentions.members.first()
    
    let warnings = db.get(`warnings_${message.guild.id}_${member.id}`)
    let mutes = db.get(`mutes_${message.guild.id}_${member.id}`)
    let kicks = db.get(`kicks_${message.guild.id}_${member.id}`)

    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, Error`) 
    .addFields(
      { name: 'Missing permissions ', value:`You dont have permission to do this`}
    )
    .setTimestamp()
    
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(RolePermsEmbed)


if(warnings === null) warnings = 0;
const av = member.user.avatarURL();
let warningsembed = new Discord.MessageEmbed()
.setColor('GREEN')
.setThumbnail(av)
.setTitle(`Modlogs for ${member.user.username}`)
.addFields(
{name: `Warns`, value: `${warnings}`},
{name: `Mutes`, value: `${mutes}`},
{name: `Kicks`, value: `${kicks}`}
)
message.channel.send(warningsembed)

}
}