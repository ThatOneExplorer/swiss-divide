const db = require('quick.db')
const Discord = require('discord.js')

module.exports = async (oldChannel, newChannel)  => {

    let logchannel = await db.get (`logchannel_${oldChannel.guild.id}`)
    if(!logchannel) 
    return;

    if(!oldChannel)
    return;
let channelupdatedembed = new Discord.MessageEmbed()
.setTitle(`Channel updated`)
.setColor('ORANGE')
.addFields(
   {name: `Old channel name`, value: `${oldChannel.name}`},
   {name: `New channel name`, value: `${newChannel.name}` },
   {name: `Channel ID`, value: `${oldChannel.id}`}
)
.setTimestamp()
const  LogChannel = await oldChannel.client.channels.fetch(logchannel);
 LogChannel.send(channelupdatedembed).catch(e => {oldChannel.send.send(`Couldn't log deleted message, please report this error by joining the support server  https://discord.gg/wfQ37TM: ${e}`)})
}
