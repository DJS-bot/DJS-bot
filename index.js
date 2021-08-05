const Discord = require('discord.js') //npm i discord.js@dev
const client = new Discord.Client({ intents: [
    "GUILDS",
    "GUILD_MESSAGES"
]}) // intents are here

client.once('ready', () => {
    console.log("Ready!")
}) // this tells us when the bot is ready to work with!

client.on('messageCreate', (message) => {
    if(message.content.startsWith("ping")) {
        //basic ping command!
        message.reply({ content: `Pong! replied with \`${client.ws.ping}ms\``})
    } // in the next video we will talk about command handlers and also make them!
    //Subscribe and share with your friends!!!! Thank you!!!
})

client.login('your-token-goes-here') //paste your token here!
// now let us start the bot!
//I will put my github in the description also!
