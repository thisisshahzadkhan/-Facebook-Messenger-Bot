require('dotenv').config({path: '.env.dev'});
const app = require('express')();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const nodemon = require('nodemon')
const routes = require('./routes');
const connection = require('./sequelize');
const dynamoose = require('dynamoose');
// dynamoose config
const ddb = new dynamoose.aws.ddb.DynamoDB({
  region: "us-east-1",
  endpoint: "http://localhost:8000",
  apiVersion: 'latest',
  credentials: {
    accessKeyId: 'MY_ACCESS_KEY',
    secretAccessKey: 'MY_SECRET_KEY'
  }
});

dynamoose.aws.ddb.set(ddb);

dynamoose.aws.ddb.local();


app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
    connection
        .sync({
            logging: console.log,
        })
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(() => {
            console.error('Unable to connect');
        });
});