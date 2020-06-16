'use strict';
import Discord from 'discord.js';
const client = new Discord.Client();
import dialog from "./dialog_flow/index.js";
import axios from 'axios';
import {} from 'dotenv/config.js';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  // DISPLAY CURRENT ETHEREUM
  if (msg.content === '!eth') {
    axios.get('https://api.coinbase.com/v2/prices/ETH-EUR/spot')
    .then(response => {
      msg.reply('Le prix de l\'ethereum est de ' + Math.round(response.data.data.amount) + ' €');
    })
    .catch(error => {
      console.log(error);
    });
  }

  // DISPLAY CURRENT BITCOIN
  if (msg.content === '!btc') {
    axios.get('https://api.coinbase.com/v2/prices/BTC-EUR/spot')
    .then(response => {
      msg.reply('Le prix du bitcoin est de ' + Math.round(response.data.data.amount) + ' €');
    })
    .catch(error => {
      console.log(error);
    });
  }
});

client.login(process.env.bot_key);