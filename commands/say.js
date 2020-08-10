module.exports = {
	name: 'say',
	description: 'repeats the message after the command',
	execute(message) { 
        const config = require("./config.json");
        const Discord = require('discord.js');
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        let RolePermsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
        .setTimestamp()
        if(!message.member.hasPermission("ADMINISTRATOR"))
        
        return message.channel.send(RolePermsEmbed)
       
        const sayMessage = args.slice(1).join(' ');
        
        message.delete().catch(O_o=>{}); 
console.log(`say command has been used in ${message.guild.name} by ${message.author.username}`);
        
        message.channel.send(sayMessage);
      }
    }
