const {handleMessage} = require('../handlers/bot');

const verification = async (req, res) => {
    console.log('verify');
};

const reply = async (req, res) => {
    const {entry, object} = req.body;
    if (object !== 'page')
        res.sendStatus(404);
    else {
        entry.map(entry => { 
            const [messages] = entry.messaging;
            const senderId = messages.sender.id;
            handleMessage(senderId, messages);
        });
    }
};

module.exports = {
    verification,
    reply
}