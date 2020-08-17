module.exports = {
    name: "hug",
    description: "hugs someone",
    async execute(message){
        let mentioned = message.mentions.members.first();

        if(mentioned){
            await message.channel.send({
                embed: {
                    description: `🤗 <@${message.author.id}> gave <@${mentioned.id}> a hug`,
                    timestamp: new Date(),
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