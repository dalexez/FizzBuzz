require('dotenv').config()
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
     const chatId = msg.chat.id;
     const msgBot = msg.text.toLowerCase()
     if (msgBot === "java" || msgBot === "node"){
        const reponse = ExplorerController.getExplorersNamesByMission(msgBot)
        bot.sendMessage(chatId, reponse);
     } else{
     const numberToApplyFb = parseInt(msg.text);
     const response = ExplorerController.validationFizzbuzz(numberToApplyFb)
     bot.sendMessage(chatId, response.bot);
     }
});