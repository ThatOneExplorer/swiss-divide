const db = require('quick.db')
const Discord = require('discord.js')
const moment = require('moment')
module.exports = async member  => {
    let welcomemessage = db.get(`welcomemessage_${member.guild.id}`)
    let Welcomechannel = db.get (`welcomechannel_${member.guild.id}`)
    
    if(!Welcomechannel) 
     return;


  
    const channel = member.guild.channels.cache.find(ch => ch.id === Welcomechannel);

let av = member.user.avatarURL();

if(Welcomechannel === null)
return;

      

   let welcomeembed = new Discord.MessageEmbed()
   .setThumbnail(av)
   .setColor('RANDOM')
   .setTitle(`Welcome ${member.user.username}`)
   .addFields(
       {name: `Welcome message`, value: `${welcomemessage}`},
    {name: `Position`, value: `${member.guild.memberCount}`},
    {name: `User mention`, value: `<@${member.user.id}>`}

     
   )
.setTimestamp()
const  welcomechannelawait = await member.client.channels.fetch(Welcomechannel);
   welcomechannelawait.send(welcomeembed).catch(e => {guildowner.send.send(`Couldn't send welcome embed, please report this error by joining the support server  https://discord.gg/wfQ37TM: ${e}`)})


   let logchannel = db.get (`logchannel_${member.guild.id}`)



   if(!logchannel) 
    return;
  

  let memberjoined = new Discord.MessageEmbed()
  .setThumbnail(av)
  .setColor('ORANGE')
  .setTitle(`Member joined`)
  .addFields(
 {name: `Member name`, value: `${member.user.username}`},
 {name: `Account created at`, value: `${moment.utc(member.user.createdAt).format("dddd,MMMM, Do YYYY")}`}
    
  )
.setTimestamp()
const  LogChannel = await member.client.channels.fetch(logchannel);
  LogChannel.send(memberjoined).catch(e => {guildowner.send.send(`Couldn't log deleted message, please report this error by joining the support server  https://discord.gg/wfQ37TM: ${e}`)})


}

