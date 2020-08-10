module.exports = {
	name: 'slowmode',
	description: 'Sets a rate limit in the channel the command is run in',
	execute(message) {

        const config = require("./config.json");
        const Discord = require('discord.js');
        const args = (message.content.slice(config.prefix.length).trim().split(/ +/g))
        const ms = require("ms");
  

          let RolePermsEmbed = new Discord.MessageEmbed()
          .setColor('RED')
          .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
          .setTimestamp()
          if(!message.member.hasPermission("MANAGE_MESSAGES"))
      
      
          
      
        return message.channel.send(RolePermsEmbed)
      
      let nonumberembed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(`${message.author.username}`)
      .addFields(
       {name: `No time given`, value: `Specify a time in seconds`}


      )
      if (isNaN(args[1]))
   return message.channel.send(nonumberembed)


    console.log(`slowmode command has been used in ${message.guild.name} by ${message.author.username}`);
       let slowmodeembed = new Discord.MessageEmbed()
       .setColor('GREEN')
       .setTitle(`Set slowmode to ${args[1]} Seconds`)
       message.channel.setRateLimitPerUser(args[1], )
      message.channel.send(slowmodeembed)
  }
}