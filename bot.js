
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});


//online status
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!` )
    bot.user.setActivity("My prefix is e!", {type: "PLAYING"});
})


bot.on("message", async message => {
if(message.author.bot || message.channel.type === "dm") return;

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ")
let cmd = messageArray[0];
let args = messageArray.slice[0];

client.login(process.env.BOT_TOKEN);
