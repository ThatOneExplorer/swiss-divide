module.exports = {
	name: 'purge',
	description: 'purges an amount of messages',
   	execute(message) {
        const config = require("./config.json");
        const Discord = require('discord.js');
        
const { prefix } = require('./config.json')
	const args = message.content.slice(prefix.length).trim().split(/ +/);
        
      

    
      
            let RolePermsEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
            .setTimestamp()
            if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(RolePermsEmbed)
        
            
            const deleteCount = args[1]
            let nodeletenumberembed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username} ERROR`)
            .addFields(
                { name: 'No purge amount given', value:`Enter a purge amount between 2-100` }
              )
          
            if(!deleteCount || deleteCount < 2 || deleteCount > 100)
              return message.channel.send(nodeletenumberembed);
            

        
            let purgeembed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Succesfully Purged ${deleteCount} messages`)
        
            
          
       message.channel.bulkDelete(args[1])
        
            message.channel.send(purgeembed)
            .then(msg => {
              msg.delete({ timeout: 2000})
            })
              .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
          }
        
       
        








    }
