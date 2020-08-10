module.exports = {
	name: 'userinfo',
	description: 'displays a user info message',
	execute(message) { 
        const config = require("./config.json");
        const Discord = require('discord.js');
        const moment = require('moment')
        const args = (message.content.slice(config.prefix.length).trim().split(/ +/g))
        let user = message.mentions.users.first() || message.author;
        if (!user.roles){
            user.roles = [];
        }
const av = user.avatarURL();
const member = message.guild.member(user);
const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setThumbnail(av)
    .setTitle(`Info for ${user.username}`)
   .addFields(
    {name: `ID`, value: `${user.id}`},
    {name: `Nickname`, value: `${member.nickname}`},
    {name: `Joined on`, value: `${moment.utc(member.joinedAt).format("dddd, MMMM, Do YYYY")}`},
    {name: `Account created on`, value: `${moment.utc(user.createdAt).format("dddd,MMMM, Do YYYY")}`}
   )

message.channel.send(embed)
    }
}

