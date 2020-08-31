const db = require('quick.db')
  const Discord = require('discord.js');
module.exports = {
	name: 'borks',
	description: 'borks the user',
	execute(message) {
    let fundisabled = db.get(`disabledfun_${message.guild.id}`)
    


    let fundisabledembed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, Error`)
   .addFields(
     {name: `This module is disabled`, value: `Do /enable <module> To re enable this module :)`}
   )

 if(fundisabled !== null){
      return message.channel.send(fundisabledembed)
 }


        
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