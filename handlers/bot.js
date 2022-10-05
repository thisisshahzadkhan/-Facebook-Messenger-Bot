const user = require('../models/user');
const { responseToFB } = require('./responseToFB');
const incommingMessages = ["Hi", "Hello", "Good morning"];
const responseMessages = ["How are you?", "I hope you're doing well.", "I hope you're having a great day."];

const handleMessage = async (senderId, message) => {
    // Greeting Message
    if (message.includes(incommingMessages)){
       await responseToFB(senderId, responseMessages[Math.floor(Math.random() * helloMessageResponses.length)]);
       return;
    }
    
    // Query Resolving
    else if (message[0] === '/'){
        switch(message){
            case '/desc':
                //fetch desc;

                await responseToFB(senderId, desc);
                break;
            case '/price':
                //fetch price;
                break;
            case '/shipping':
                //fetch shipping;
                break;
            case '/buy':
                //fetch buy send mail;
                break;
            default:
                await responseToFB(senderId, 'Your query is hard to interpret can you please read the documentation!');
        };
    }
    await responseToFB(senderId, 'Your query is hard to interpret can you please read the documentation!');
    return;
}

module.exports = {
    handleMessage
}