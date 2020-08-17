const MessageEmbed = require("discord.js").MessageEmbed
const randomPuppy = require("random-puppy")
const subReddits = require("../subreddits.json").subReddits
module.exports = {
    name: "meme",
    description: "meme for days",
    async execute(message){
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
          const img = await randomPuppy(random);
          const embed = new MessageEmbed()
            .setImage(img)
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
            .setTimestamp();
          await message.channel.send(embed);
        }
    }
