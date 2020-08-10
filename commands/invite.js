module.exports = {
	name: 'invite',
	description: 'The bots invite link',
	execute(message) { 
        const config = require("./config.json");
        const Discord = require('discord.js');

let inviteembed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(`Want to invite SwissDivide to your bot?, Click on this message!`)
.setURL('https://discord.com/api/oauth2/authorize?client_id=736058179074523197&permissions=8&scope=bot')

message.channel.send(inviteembed)

    }
}