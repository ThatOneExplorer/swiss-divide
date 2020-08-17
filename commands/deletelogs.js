const db = require('quick.db')
const Discord = require('discord.js')


module.exports = {
    name: 'deletelogs',
    description: 'deletes the log channel from the database',


async execute(message) {

let RolePermsEmbed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`${message.author.username}, Error`) 
.addFields(

    { name: 'Missing permissions ', value:`You dont have permission to do this`}
)
.setTimestamp()


if(!message.member.hasPermission("KICK_MEMBERS"))
return message.channel.send(RolePermsEmbed)


let logchannel = db.get(`logchannel_${message.guild.id}`, message.channel.id)


let nologembed = new Discord.MessageEmbed()
.setTitle(`${message.author.username}`)
.addFields(
    {name: `No log channel`, value: `There is no log channel for this guild`}
)
if(logchannel === null){


return message.channel.send(nologembed)
}

let deletelogembed = new Discord.MessageEmbed()
.setTitle(`Succesfully deleted logs`)
.addFields(
{name: `This channel will no longer recieve logs`, value: `To re-enable logs, use the setlogs command`}
)


db.delete(`logchannel_${message.guild.id}`, message.channel.id)
message.channel.send(deletelogembed)
}
}