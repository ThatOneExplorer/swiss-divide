module.exports = {
	name: 'clearlogs',
	description: 'clears all logs from the user',
	async execute(message) {
    const db = require('quick.db')
     
        const Discord = require('discord.js');
      
        
      
  
        let member = message.mentions.members.first();
       
        
       



        let RolePermsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username}, Error`) 
        .addFields(

            { name: 'Missing permissions ', value:`You dont have permission to do this`}
        )
        .setTimestamp()


        if(!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(RolePermsEmbed)
        
         let mutevalidmemberembed = new Discord.MessageEmbed()
         .setTitle(`${message.author.username} Error `)
         .setColor('RED')
           .addFields(
             { name:  ` Please enter a valid user`, value:`Who's logs do you want to clear?` },
           
            )
    

            let bans = db.get(`bans_${message.guild.id}_${member.user.id}`)
            
            let kicks = db.get(`kicks_${message.guild.id}_${member.user.id}`)

            
            let mutes = db.get(`mutes_${message.guild.id}_${member.user.id}`)

            
            let warns = db.get(`warns_${message.guild.id}_${member.user.id}`)

        if (!member)
        return message.channel.send (mutevalidmemberembed)
        

      

    await db.delete(`bans_${message.guild.id}_${member.user.id}`)
    await db.delete(`kicks_${message.guild.id}_${member.user.id}`)
    await db.delete(`mutes_${message.guild.id}_${member.user.id}`)
    await db.delete(`warnings_${message.guild.id}_${member.user.id}`)

    let clearedlogsembed = new Discord.MessageEmbed()
    .setTitle(`Succesfully cleared all logs`)
    .addFields(
        {name: `Cleared by`, value:`${message.author.username}`},
        {name: `Cleared logs of`, value: `${member.user.username}`}
    )
    message.channel.send(clearedlogsembed)
        }
}