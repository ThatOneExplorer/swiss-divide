const db = require('quick.db')
const Discord = require('discord.js')
const ban = require('./ban')


module.exports = {
name: 'modlogs',
description: 'Gets a list of moderative action thats been taken on the user',
async execute (message) { 
  let member = message.mentions.members.first();
    
    
    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, Error`) 
    .addFields(
      { name: 'Missing permissions ', value:`You dont have permission to do this`}
    )
    .setTimestamp()

    let validMemberEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .addFields(
      { name: 'No user mentioned', value:`The user may no longer be in this guild, or doesn't exist` }
    )
    .setTimestamp()

    
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(RolePermsEmbed)

   if(!member)
  return message.channel.send(validMemberEmbed)
   let warnings = db.get(`warnings_${message.guild.id}_${member.user.id}`)
    let mutes = db.get(`mutes_${message.guild.id}_${member.user.id}`)
    let kicks = db.get(`kicks_${message.guild.id}_${member.user.id}`)
    let bans = db.get(`bans_${message.guild.id}_${member.user.id}`)

if(warnings === null) warnings = 'This user has no warns!';
if(mutes === null) mutes = 'This user has no mutes!';
if(kicks === null) kicks = 'This user has no kicks!';
if(bans === null) bans = 'This user has no bans!';

const av = member.user.avatarURL();
let warningsembed = new Discord.MessageEmbed()
.setColor('GREEN')
.setThumbnail(av)
.setTitle(`Modlogs for ${member.user.username}`)
.addFields(
{name: `Warns`, value: `${warnings}`},
{name: `Mutes`, value: `${mutes}`},
{name: `Kicks`, value: `${kicks}`},
{name: `Bans`, value: `${bans}`}
)
message.channel.send(warningsembed)

}
}