
  const Discord = require('discord.js');
module.exports = {
	name: 'borks',
	description: 'borks the user',
	execute(message) {
 
   
      
    
        
        let borkvalidmember = new Discord.MessageEmbed()
        .setColor('RED')
        .addFields(
          { name: 'No user mentioned', value:`Please mention a valid member of this server` }
        )
        .setTimestamp()
    
 
        let member = message.mentions.members.first();
        if(!member)
        return message.channel.send(borkvalidmember)
      let borkembed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(`${message.author.username} borked  ${member.user.username} :heart: `)
      return message.channel.send(borkembed)
    }
}