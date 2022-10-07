const product = require('./models/product');
const input = require('./products.json');
const _ = require('lodash');
const addProductsToDB = async (data) => {
    // map the required fields such as id, price, shipping, description 
    const bulk = _.map(data, product => {
        return {
            'id': product.sku,
            'name': product.name,
            'price': product.price,
            'shipping': product.shipping,
            'description': product.description
        };
    });
    // writing to DB in bulk
    await product.bulkCreate(bulk);
};
// split the data into arrays/chunks of 10 or any other higher number at which the data can be written to the DB.
const chunkAdd = async (input) => {
    const chunks = _.chunk(input, 10);
    Promise.all(
        _.map(chunks, async (chunk)=> await addProductsToDB(chunk))
    );
};

console.log('Adding Data', chunkAdd(input));