const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Model Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Model Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Model Codes`, "https://www.twitch.tv/dggamingbot");
client.user.setStatus("online")
 
});
client.login(process.env.BOT_TOKEN);