const { responseToFB } = require('./responseToFB');
const product = require('../models/product');
const { sendEmail } = require('./sendGrid');
const incommingMessages = ["Hi", "Hello", "Good morning"];
const responseMessages = ["How are you?", "I hope you're doing well.", "I hope you're having a great day."];

const handleMessage = async (senderId, message) => {
    console.log('message', message);
    // Greeting Message
    if (incommingMessages.includes(message)){
       await responseToFB(senderId, responseMessages[Math.floor(Math.random() * responseMessages.length)]);
       return;
    }
    
    // Query Resolving
    else if (message[0] === '/'){
        try {
            const productObject = await product.findOne({where: {id:  message.split(' ')[1]}});
            switch(message.split(' ')[0]){
                case '/desc':
                    //fetch desc
                    await responseToFB(senderId, productObject.description);
                    break;
                case '/price':
                    //fetch price
                    await responseToFB(senderId, productObject.price);
                    break;
                case '/shipping':
                    //fetch shipping
                    await responseToFB(senderId, productObject.shipping);
                    break;
                case '/buy':
                    //fetch buy send mail
                    await sendEmail(productObject);
                    break;
                default:
                    await responseToFB(senderId, 'Your query is hard to interpret can you please read the documentation!');
            };    
        } catch (error) {
            await responseToFB(senderId, 'Your query is hard to interpret can you please read the documentation!');
            return;
        }
    }
    return;
}

module.exports = {
    handleMessage
}