const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./commands/config.json');
const { token } = require("./token.json")
const chalk = require('chalk');

const { yellowBright, redBright, blueBright, greenBright } = require('chalk');
const path = require("path");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}





console.log
    ('Starting bot')
console.log('Loading modules')

console.log(blueBright('Connecting to Discord API'))
client.once('ready', () => {


	let guilds = client.guilds.cache.map(guild => "Guild name" +  "    " + "     " + guild.name + "    " + "     " + `Guild id` +  "    " + "     " + guild.id)
    console.log(guilds)

client.user.setActivity('Status page https://swissdivide.statuspage.io/')




	console.log(greenBright(' Launched and Logged in'), ('as'), chalk.red(`${client.user.username}`), ('With'), chalk.green(`${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`));
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
   
	let commandindmembed = new Discord.MessageEmbed()
	.setColor('RED')
	.setTitle(`${message.author.username}, ERROR`)
	.addFields(
		{name: `Command run in DMS`, value: `You cant use command in my DMS silly :P`}
	)
if(!message.guild)
return message.channel.send(commandindmembed)
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


require("./handlers/eventHandler")(client);

client.login(token);