
const AWS = require('aws-sdk');

module.exports.lambdaInvoke = (data) => {
    const lambda = new AWS.Lambda({endpoint: 'http://127.0.0.1:3001', region: 'us-east-1' });
    return lambda.invoke({
        FunctionName: 'writeUser',
        Payload: JSON.stringify(data),
    },function(err, obj){
        if (err) return err;
        else return obj;
    });
   };
