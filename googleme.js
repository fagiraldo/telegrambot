var bot = require('telegram-bot-bootstrap');
var fs = require('fs');
var chat = 1599839; //replace this with your chat id noted previously 
var text="this is my sample test"; //replace this with your message
var token = "174739068:AAHQbUU3dE0shPI5h2lK0pCRWPs1PRXlcsg"; //replace token with the token given by botfather
var Alice = new bot(token);
Alice.getUpdates().then(console.log) // you'll see an update message. Look for your user_id in "message.from.id"
// Once you get your id to message yourself, you may:
Alice.sendMessage(chat, text) // you'll receive a message from Alice..then(console.log)// ? optional, will log the successful message sent over HTTP
