'use strict';
import Discord from 'discord.js';
const client = new Discord.Client();
import dialog from "./dialog_flow/index.js";
import {} from 'dotenv/config.js';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  dialog(msg.content)
    // msg.reply(dialog(msg.content))
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(process.env.bot_key);