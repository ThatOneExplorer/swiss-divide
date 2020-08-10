module.exports = {
	name: 'remind',
	description: 'Sets a reminder',
   	execute(message) {
        const config = require("./config.json");
        const Discord = require('discord.js');
        
const { prefix } = require('./config.json')
	const args = message.content.slice(prefix.length).trim().split(/ +/);
        const ms = require('ms')
        let reminder = args.slice(2).join(' ');

    
      
            
            
            const time = args[1]
            let noreminder = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username} ERROR`)
            .addFields(
                { name: 'No reminder set', value:`please do ${prefix}Remind <reminder> <time>` }
              )
          
            if(!time)
              return message.channel.send(noreminder);
            

        
            let setreminderembed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Succesfully set a reminder for ${time}, ${reminder}`)
        
            message.channel.send(setreminderembed)
          
            setTimeout(function(){
                let reminderembed = new Discord.MessageEmbed()
                .setColor('PURPLE')
              .setTitle(`Reminder for ${message.author.username}`)
              .addFields(
                  {name: `Reminder:`, value: `${reminder}`}
              )
                message.reply(reminderembed)

        
              
            }, ms(time));
       
        
        }







    }
