module.exports = {
	name: 'ping',
	description: 'Gets the ping',
	async execute(message, client) {
    const Discord = require ('discord.js')
    
    let awaitembed = new Discord.MessageEmbed()
    .setColor('PURPLE')
     .setTitle(`Pinging `)
       
     const m = await message.channel.send(awaitembed);
        


     let pingembed = new Discord.MessageEmbed()
     .setColor('BLUE')
    .setTitle(`Pong! :ping_pong: `)
    .addFields(
        {name: `Latency is`, value: `${m.createdTimestamp - message.createdTimestamp}ms.`}
    )
      
        
        m.edit(pingembed);







    }
}