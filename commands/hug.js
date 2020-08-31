module.exports = {
    name: "hug",
    description: "hugs someone",
    async execute(message){
        const db = require('quick.db')

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


      



        let mentioned = message.mentions.members.first();

        if(mentioned){
            await message.channel.send({
                embed: {
                    description: `🤗 <@${message.author.id}> gave <@${mentioned.id}> a hug`,
                    timestamp: new Date(),
                    colour: `blue`
                }
            });
        } else {
            await message.channel.send({
                embed: {
                    description: `You must mention a member. Usage: \`hug @member\``,
                    timestamp: new Date(),
                }
            });
        }
    }
}