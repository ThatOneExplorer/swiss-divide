module.exports  = {
    name: "suicide",
    description: "gives you suggestions on how to do it",
    execute(message) {
        const dumbWaysToDie = [
            "using a gun",
            "a skydive indcident",
            "using a noose",
            "cutting your writs",
            "overdosing on herione",
            "commitng a capitol offence and getting the death penalty",
            "jumping infront of a train",
            "jumping off a bridge",
            "putting toaster in your bath"
        ]
        const getRandom = (array) => {
            return array[Math.floor(Math.random() * array.length)];
          }
          const death = getRandom(dumbWaysToDie)
        return message.reply(`You should commit suicide by ${death}! Have fun!`)
    }
}