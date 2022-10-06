const axios = require('axios');

module.exports.responseToFB = async (senderId, response) => {
    const url = `https://graph.facebook.com/v13.0/me/messages`;
    try {
        const res = await axios.post(url, {
            "recipient": {
                "id": senderId
            },
            "message":{
                "text": response
            }
        },{
            params: {access_token: process.env.FB_ACCESS_TOKEN}
        });
    } catch (error) {
        console.log(error.response.data.error);
    }
};