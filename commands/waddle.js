
module.exports = {
	name: 'waddle',
	description: 'Sends a waddle embed',
	execute(message) { 
        const config = require("./config.json");
        const Discord = require('discord.js');






const penguin = [
    "https://cdn.discordapp.com/attachments/733883175578894366/736291046765625514/1-adelie-penguins-species-1524251364.png",
"https://media.discordapp.net/attachments/733883175578894366/736291087605301268/ImageForArticle_1061_15837536188863190.png?width=713&height=474",
"https://media.discordapp.net/attachments/733883175578894366/736291117288521788/111925035_penguino.png?width=844&height=475",
"https://media.discordapp.net/attachments/733883175578894366/736291141116362914/image-20150224-32232-1q1kb13.png?width=397&height=265",
"https://media.discordapp.net/attachments/733883175578894366/736291172586356736/453801468.png?width=712&height=475",
"https://media.discordapp.net/attachments/733883175578894366/736291202965700708/images.png?width=180&height=180",
]
const waddlerandom = penguin[Math.floor (Math.random() * penguin.length) ]


let waddleembed = new Discord.MessageEmbed()
.setTitle(`${message.author.username}, Waddle!`)
.setImage(waddlerandom)
.setColor('BLUE')

 message.channel.send(waddleembed)
return console.log(`Waddle command has been used in ${message.channel.name} by ${message.author.username}`)

}
}