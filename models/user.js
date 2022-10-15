const dynamoose = require('dynamoose');

const userSchema = new dynamoose.Schema({
    id: {type: String, hashKey: true},
    userId: {type: String, required: true},
    query: {type: String, required: true}
});

const user = dynamoose.model('usersLog', userSchema);

module.exports = {user};
