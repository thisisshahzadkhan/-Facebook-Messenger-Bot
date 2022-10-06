require('dotenv').config({path: '.env.dev'});
const app = require('express')();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const nodemon = require('nodemon')
const routes = require('./routes');
const connection = require('./sequelize');

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