// const aws = require('aws-sdk');
const dynamoose = require('dynamoose');

aws.config.update({
  region: "us-east-1",
  endpoint: "http://localhost:8000",
  apiVersion: 'latest',
  credentials: {
    accessKeyId: 'MY_ACCESS_KEY',
    secretAccessKey: 'MY_SECRET_KEY'
  }
});

// const dynamodb = new aws.DynamoDB({apiVersion: '2012-08-10'});

// dynamodb.createTable({
//     AttributeDefinitions: [
//         {
//             AttributeName: 'Id',
//             AttributeType: 'S'
//         },
//         {
//             AttributeName: 'userId',
//             AttributeType: 'S'
//         }
//     ],
//     KeySchema: [
//         {
//             AttributeName: 'Id',
//             KeyType: 'HASH'
//         },
//         {
//             AttributeName: 'userId',
//             KeyType: 'RANGE'
//         }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1
//       },
//     TableName: 'userLog',
//         StreamSpecification: {
//         StreamEnabled: false
//       }
//     }, (err, data) => {
//         if (err) console.log(err);
//         else {
//             console.log(data);
//         }
//       });

module.exports = {
    dynamodb
};

// IF any user dont want to user the ORM (dynamoose) then code of this file should be used  