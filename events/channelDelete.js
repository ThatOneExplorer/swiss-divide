const db = require('quick.db')
const Discord = require('discord.js')
const moment = require('moment')
module.exports = async channel  => {



    let logchannel = db.get (`logchannel_${channel.guild.id}`)



    if(!logchannel) 
     return;

let channeldeletedembed = new Discord.MessageEmbed()
.setTitle(`Channel deleted`)
.setColor('ORANGE')
.addFields(
    {name: `Channel name`, value: `${channel.name}`},
    {name: `Channel ID`, value: `${channel.id}`}
)
.setTimestamp()
const  LogChannel = await channel.client.channels.fetch(logchannel);
  LogChannel.send(channeldeletedembed).catch(e => {guildowner.send.send(`Couldn't log deleted message, please report this error by joining the support server  https://discord.gg/wfQ37TM: ${e}`)})
}