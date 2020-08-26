module.exports = {
	name: 'unmute',
	description: 'Mutes the user',
async	execute(message, prefix) {
    const db = require('quick.db')
    const fs = require("fs")
            const Discord = require('discord.js');
        const args = (message.content.slice(prefix.length).trim().split(/ +/g))
      

        let muteroleid = await db.get(`muterole_${message.guild.id}`)
        const muterolename = muteroleid.name
        const muterole = message.guild.roles.cache.find(role => role.name === `${muterolename}`);



        let RolePermsEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username}, Error`) 
        .addFields(
          { name: 'Missing permissions ', value:`You dont have permission to do this`}
        )
         let mutevalidmemberembed = new Discord.MessageEmbed()
         .setTitle(`${message.author.username} Error `)
           .addFields(
             { name:  ` Please enter a valid user`, value:`Who do you want to be muted?` },
           
            )
        
        let member = message.mentions.members.first();
        
        if (!member)
        return message.channel.send (mutevalidmemberembed)
        
        
        if(!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(RolePermsEmbed)
   
member.roles.remove(muterole);
let unmuteembed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(`Unmute ${member.user.username}`)
.setDescription(`unmuted by ${message.author.username}`)
message.channel.send(unmuteembed)
let unmuteddmembed = new Discord.MessageEmbed()
.setTitle(`You have been unmuted in ${message.guild.name}, you may now talk`)




      
member.user.send(unmuteddmembed).catch(e => {message.reply(`There was an error unmuting: ${e}`)})


         
    




    }
}