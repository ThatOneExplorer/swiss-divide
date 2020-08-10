const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const chalk = require('chalk');
const Canvas = require('canvas');

const { prefix } = require('./commands/config.json')
const {token} = require('./token.json')


const { yellowBright, redBright, blueBright, greenBright } = require('chalk');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.login(token);

console.log
    ('Starting bot')
console.log('Loading modules')

console.log(blueBright('Connecting to Discord API'))
client.once('ready', () => {
    console.log(greenBright(' Launched and Logged in'), ('as'), chalk.red(`${client.user.username}`), ('With'), chalk.green(`${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`));
});

client.on("guildCreate", guild => {
  
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});  

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

    

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
{

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(`there was an error trying to execute that command! ${error}`);
    }
}

});



client.on("message", async message => {
    const config = require("./commands/config.json");

    const args = (message.content.slice(config.prefix.length).trim().split(/ +/g))
 
  const {prefix} = require('./commands/config.json')
    let reason = args.slice(1).join(' ');
  
    const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
  
  
  
    const Discord = require('discord.js');
  
  
    if(message.author.bot) return;
  
    
  
    if(!message.content.startsWith(config.prefix)) return;
    
    
    
    const command = args.shift().toLowerCase();

if(command === "ping") {
  
    const m = await message.channel.send("Getting the ping");
    m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }



});
