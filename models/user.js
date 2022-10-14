const dynamoose = require('dynamoose');

const userSchema = new dynamoose.Schema({
    id: {type: String, hashKey: true},
    userId: {type: String, required: true},
});

const user = dynamoose.model('user', userSchema);

module.exports = {user};
