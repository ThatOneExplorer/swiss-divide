module.exports = {
	name: 'warn',
	description: 'Warns the user',
	execute(message) {

        const config = require("./config.json");
        const Discord = require('discord.js');
        const args = (message.content.slice(config.prefix.length).trim().split(/ +/g))
    


let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username} ERROR`) 
    .addFields(
        { name: 'Missing permissions ', value:`You dont have permission to do this`}
    )
    .setTimestamp()


    let reason = args.slice(2).join(' ');
        
    let member = message.mentions.members.first();
    let WarnCantFindEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} ERROR`)
    .setColor('RED')
.addFields(
    { name: 'No user mentioned', value:`Please mention a valid member of this server` }
)


    let NoWarnReason = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} ERROR`)
    .addFields(
    {  name: 'No reason given', value:`Please enter a valid reason`}
    )
 .setTimestamp()


    if (!member)

    
    return message.channel.send(WarnCantFindEmbed)

    if(!message.member.hasPermission("KICK_MEMBERS"))

    return message.channel.send(RolePermsEmbed)


    if(!reason) 


    return message.channel.send(NoWarnReason)

    WarnEmbed = new Discord.MessageEmbed()
    .setTitle(`you have been warned in ${message.guild.name}`)
    .setColor('RED')
    .addFields(

     { name: 'Moderator', value: `${message.author.username}`, inline: true },     { name: 'reason', value: `${reason}`, inline: true},
    
    )



    let ServerWarnEmbed = new Discord.MessageEmbed()
    
    .setTitle(`Warned ${member.user.username}`)
    .setColor('GREEN')
    .addFields(
   { name: 'Warned for', value: `${reason}`, inline: true        },        { name: 'Warned by', value:`${message.author.username}`, inline: true},
 


    )
       
    try {
        member.send(WarnEmbed)
    } catch (error) {
        console.error(error);
        message.reply(`Couldn't send messages to this user ${error}`);
    }

    message.channel.send(ServerWarnEmbed)
    }
}