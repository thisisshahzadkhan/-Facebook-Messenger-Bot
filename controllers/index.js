const {handleMessage} = require('../handlers/bot');
// const aws = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
// aws.config.update({
//   region: "us-east-1",
//   endpoint: "http://localhost:8000",
//   apiVersion: 'latest',
//   credentials: {
//     accessKeyId: 'MY_ACCESS_KEY',
//     secretAccessKey: 'MY_SECRET_KEY'
//   }
// });

// const dynamodb = new aws.DynamoDB({apiVersion: '2012-08-10'});

// const {dynamodb} = require('../dynamoDB');
const { user } = require('../models/user');

const verification = async (req, res) => {
    // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === process.env.FB_VERIFY_TOKEN) {
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
            if (messages.message && messages.message.text && !messages.message.is_echo)
                handleMessage(senderId, messages.message.text);
        });
        res.status(200).send('EVENT_RECEIVED');
    }
};

const userLog = async (req, res) => {
  try {
    const instance =await user.get("9f4ff4f7-1665-4c45-a470-efd8afd5e7cf");
    res.json({'log' : instance});
  } catch (error) {
    res.json({'error': error});
  }
  // dynamodb.scan({
  //   TableName : 'userLog',
  // }, (err, data) => {
  //   if (err) res.json({'error': err});
  //   else {
  //     res.json({'log' : data});
  //   }
  // });
};

const dymmyWrite = async (req, res) => {
  try {
    let newUser = new user({
      id: uuidv4(),
      userId: '2'
    });
    await newUser.save();
    res.json({'added' : newUser});
  } catch (error) {
    res.json({'log' : error});
  }
  // dynamodb.putItem({
  //   TableName : 'userLog',
  //   Item : {
  //     id : {S: uuidv4()+''},
  //     userId : {S: '1'}
  //   }
  // }, (err, data) => {
  //   if (err) res.json({'error': err});
  //   else {
  //     res.json({'log' : data});
  //   }
  // });
};

module.exports = {
    verification,
    reply,
    userLog,
    dymmyWrite
}