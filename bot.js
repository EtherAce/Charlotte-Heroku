
const Discord = require("discord.js");
const client = new Discord.client()

client.on('ready', () => {
    console.log('Online!')
});

{
    "prefix":"e!"
}

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

//hello command
if(cmd === `${prefix}hello`){
    return message.channel.send("Hello! :3")
}

//test command
if(cmd === `${prefix}test`){
    return message.channel.send("Hello! I am okay! :D")
}

})





bot.login(botconfig.token);

client.login(process.env.BOT_TOKEN);
