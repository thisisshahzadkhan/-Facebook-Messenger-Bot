require('dotenv').config({path: '.env.dev'});
const Sequelize = require('./connection');
require('./models');
Sequelize.sync({ force: true }).then(() => {
    console.log('DB and tables created!');
});