module.exports = {
	name: 'userinfo',
	description: 'displays a user info message',
	execute(message, prefix) { 
        const db = require('quick.db')
   
        const Discord = require('discord.js');
        const moment = require('moment')
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
        let user = message.mentions.users.first() || message.author;
       
     
    



const av = user.avatarURL();

const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setThumbnail(av)
    .setTitle(`Info for ${user.username}`)
   .addFields(
    {name: `ID`, value: `${user.id}`},
    {name: `Nickname`, value: `${user.nickname}`},
    {name: `Joined on`, value: `${moment.utc(user.joinedAt).format("dddd, MMMM, Do YYYY")}`},
    {name: `Account created on`, value: `${moment.utc(user.createdAt).format("dddd,MMMM, Do YYYY")}`}
   )
  
message.channel.send(embed)
    }
}

