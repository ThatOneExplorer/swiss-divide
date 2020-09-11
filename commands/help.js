const Discord = require('discord.js')
const db = require('quick.db')
const prefix = ('/')
module.exports = {
    name: `help`,
    description: `Help command`,

    async execute(message){

        const args = (message.content.slice(prefix.length).trim().split(/ +/g))


      let helpembed = new Discord.MessageEmbed()
      .setColor('GREEN')
    .setTitle(`Help`)
    .addFields(
    {name: `Moderation`, value: `:hammer_pick: `},
    {name: `Fun`, value: `:partying_face: `},
    {name: `Misc`, value: `:gear:`},
    {name: `Set`, value: `:hammer: `}
    )


    let helpmodembed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .addFields(
    { name: `${prefix}Mute`, value: `Mutes the user, **USAGE** ${prefix}mute <@user> <@time> <@reason>`,  }, 
    { name: `${prefix}Kick`, value: `Kicks a user from the server **USAGE** ${prefix}kick <@user>  <@reason> `},
    { name: `${prefix}Ban`, value: `Bans a user from the server  **USAGE** ${prefix}ban <@user>  <@reason> `},
    { name: `${prefix}Warn`, value: `Warns a user **USAGE** ${prefix}warn <@user>  <@reason> `},
    { name: `${prefix}Purge`, value: `Deletes a specified amount of messages **USAGE** ${prefix}Purge <amount>`},
    { name: `${prefix}Slowmode`, value: `Sets a rate limit **USAGE** ${prefix}slowmode <time>,, **NOTE TIME HAS TO BE IN SECONDS**`},
    { name: `${prefix}Modlogs`, value: `Shows the amount of warns, mutes, kicks and bans a user has**USAGE** ${prefix}Modlogs <user>`}
    )


    let helpmiscembed = new Discord.MessageEmbed()
    .setColor('PURPLE')
        .addFields(
            { name: `${prefix}Serverinfo`, value: `Shows info about the server, **USAGE** ${prefix}Serverinfo`,  }, 
            { name: `${prefix}Say`, value: `repeats a message, **USAGE** ${prefix}Serverinfo`,  }, 
            {name: `${prefix}Suggest`, value: `Suggests something for the bot, **USAGE** ${prefix}Suggest <suggestion>`},
            {name: `${prefix}Remind`, value: `Sets a reminder **USAGE** ${prefix}Remind <time> <reminder>`},
            { name: `${prefix}Userinfo`, value: `Shows info for a user **USAGE** ${prefix}Userinfo OR ${prefix}Userinfo <user>`,  },
            { name: `${prefix}Ping`, value: `Show's the latency **USAGE** ${prefix}Ping`,  },
            {name: `${prefix}Enable`, value: `Enables Modules / Features **USAGE**${prefix}Enable <Module>`},
            {name: `${prefix}Disable`, value: `Disables Modules / Features **USAGE**${prefix}Disable <Module>`},
            {name: `${prefix}Set`, value: `Set certain Objects, **USAGE** ${prefix}Set <object>`}
             )


             let helpfunembed = new Discord.MessageEmbed()
.setColor('BLUE')
.addFields(
    { name: `${prefix}8ball`, value: `Gives a random response, **USAGE** ${prefix}8Ball <Question>`,  },
    { name: `${prefix}Waddle`, value: `Sends a random penguin image, **USAGE** ${prefix}Waddle`,  },
 { name: `${prefix}Coinflip`, value: `Heads or tails? **USAGE** ${prefix}Coinflip`,  },
 { name: `${prefix}Croissant`, value: `Would you like a croissant? **USAGE** ${prefix}Croissant`,  },
 { name: `${prefix}Slap`, value: `Now you can finally slap that person!!! **USAGE** ${prefix}Slap <user>`,  },
 { name: `${prefix}Hug`, value: `Hugs a user you love owo **USAGE** ${prefix}Hug <user>`  },
 { name: `${prefix}Vibecat`, value: `Vibe cat :sunglasses: **USAGE** ${prefix}Vibecat `  },
 { name: `${prefix}Beincake`, value: `Beincake **USAGE** ${prefix}Beincake`  },
 { name: `${prefix}Asmr`, value: `Sexy asmr video **USAGE** ${prefix}Asmr **NSFW**`  },
 { name: `${prefix}Cup`, value: `A documentary about how two girls got stuck in one cup **USAGE** ${prefix}Cup **NSFW**`  },
 { name: `${prefix}Poop`, value: `A poopoo song **USAGE** ${prefix}Poop **NSFW**`  },
 { name: `${prefix}Mork`, value: `Show's an intresting but true fact **USAGE** ${prefix}Mork`  },
 { name: `${prefix}Fact`, value: `Fun / not so fun facts! **USAGE** ${prefix}Fact`  }
)


let helpsetembed = new Discord.MessageEmbed()
.setColor('YELLOW')
.addFields(
    {name: `${prefix}Set Appeal`, value: `Set's an appeal link for your guild that gets sent with the ban message, **USAGE**${prefix}Set Appeal <Link>`},
    {name: `${prefix}Set mRole`, value: `Sets a muted role for this guild, **USAGE** ${prefix}Set mRole <@role>`}
)
const helpsection = args[1]


if(!helpsection){
    return message.channel.send(helpembed)
}

if (helpsection ==='Moderation'){
    return message.channel.send(helpmodembed)
}
if(helpsection ==='Misc'){
return message.channel.send(helpmiscembed)
    }
    if(helpsection ==='Fun'){
        return message.channel.send(helpfunembed)
    }
    if(helpsection ==='Set'){
        return message.channel.send(helpsetembed)
    }
}
}