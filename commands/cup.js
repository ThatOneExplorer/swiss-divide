module.exports = {
    name: "cup",
    description: "a lovely video",
    execute(message){

        if(!message.channel.nsfw) {
        return message.channel.send(`This can only be used in NSFW channels`)
        }
        return message.reply("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiZvPiktqPrAhV4gnIEHcB1A20QFjAAegQIBRAB&url=http%3A%2F%2F2girls1cup.info%2F&usg=AOvVaw3S938JrMvvMPPdA-YHTAqg")
    }
}