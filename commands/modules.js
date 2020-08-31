const db = require('quick.db')
const Discord = require('discord.js')



module.exports = {
    name: `modules`,
    description: `Lists modules the bot has`,
    async execute(message){
 
        let moddisabled = db.get(`moddisabled_${message.guild.id}`)
        let fundisabled = db.get(`disabledfun_${message.guild.id}`)
        let nsfwdisabled = db.get(`disablednsfw_${message.guild.id}`)
        let utilitydisabled = db.get(`disabledutility_${message.guild.id}`)

        let ModulesList = new Discord.MessageEmbed()
          .setTitle(`Modules`)

          .addFields(
              {name: ` :hammer_pick: Moderation :hammer_pick: `, value: ' ``` Ban,  Kick,  Mute,  Warn,  Unmute,  Purge,  Clearwarns,  Clearmutes,  Clearlogs , Clearkicks,  Clearbans,  Slowmode,  Modlogs ```'},
              {name: `Disabled?`, value: `${moddisabled}`},
              {name: ` :partying_face:  Fun :partying_face: `, value: ' ``` 8ball,  Beincake,  Bork,  Coinflip,  Croissant,  Hug,  Meme,  Waddle,  Mork  ```'},
              {name: `Disabled?`, value: `${fundisabled}`},
              {name: `:gear:  Utility :gear: `, value: '``` Appeallink,  Deletelogs,  Memberinfo,  Ping,  Remind,  Removeappeal,  Serverinfo,  Setbanappeal,  Setlogs,  Setmuterole,  Suggestion, ``` '},
              {name: `Disabled?`, value: `${utilitydisabled}`},
              {name: `:wink:  NSFW :wink: `, value: '```Cup,  Poop,  ASMR,  ``` '},
              {name: `Disabled?`, value: `${nsfwdisabled}`}
          )
          .setFooter(`To disable a module, do /disable <module> `)
message.channel.send(ModulesList)
 }
}