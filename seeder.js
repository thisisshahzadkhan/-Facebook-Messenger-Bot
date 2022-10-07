const product = require('./models/product');
const input = require('./products.json');
const _ = require('lodash');
const addProductsToDB = async (data) => {
    const bulk = _.map(data, product => {
        return {
            'id': product.sku,
            'name': product.name,
            'price': product.price,
            'shipping': product.shipping,
            'description': product.description
        };
    });
    await product.bulkCreate(bulk);
};

const chunkAdd = async (input) => {
    const chunks = _.chunk(input, 10);
    Promise.all(
        _.map(chunks, async (chunk)=> await addProductsToDB(chunk))
    );
};

console.log('Adding Data', chunkAdd(input));

