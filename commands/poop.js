const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: "poop",
    description: "a lovely video",
    execute(message){

        let nsfwdisabled = db.get(`disablednsfw_${message.guild.id}`)

        let nsfwdisabledembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`${message.author.username}, Error`)
       .addFields(
         {name: `This module is disabled`, value: `Do /enable <module> To re enable this module :)`}
       )



        if(nsfwdisabled !== null){
         return message.channel.send(nsfwdisabledembed)
        }


        if(!message.channel.nsfw) {
            return message.channel.send(`This can only be used in NSFW channels`)
            }
        return message.reply("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiZvPiktqPrAhV4gnIEHcB1A20QFjAAegQIBRAB&url=http%3A%2F%2F2girls1cup.info%2F&usg=AOvVaw3S938JrMvvMPPdA-YHTAqg")
    }
}