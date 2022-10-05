const {handleMessage} = require('../handlers/bot');

const verification = async (req, res) => {
    // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === process.env.FB_ACCESS_TOKEN) {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
};

const reply = async (req, res) => {
    const {entry, object} = req.body;
    if (object !== 'page')
        res.sendStatus(404);
    else {
        entry.forEach(entry => { 
            const [messages] = entry.messaging;
            const senderId = messages.sender.id;
            handleMessage(senderId, messages.message.text);
        });
        res.status(200).send('EVENT_RECEIVED');
    }
};

module.exports = {
    verification,
    reply
}