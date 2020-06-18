'use strict';

import Discord from 'discord.js';
const client = new Discord.Client();
import dialog from "./dialog_flow/index.js";
import axios from 'axios';
import {} from 'dotenv/config.js';
const prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if(msg.content.toLowerCase().startsWith(prefix))
  {
    dialog(msg.content.substring(1)).then(function(result){
      msg.reply(result.fulfillmentText);
    });
  }

});

client.login(process.env.bot_key);