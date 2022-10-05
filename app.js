require('dotenv').config({path: '.env.dev'});
const app = require('express')();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const routes = require('./routes');

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
    console.log('Server listening on port :', PORT);
});