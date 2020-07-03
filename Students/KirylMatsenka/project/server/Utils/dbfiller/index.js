let db = require('mongoose');
let fs = require('fs');

let catalog = './server/Utils/dbfiller/catalog.json';
let basket = './server/Utils/dbfiller/basket.json';

let Products = require('../../db/models/products.js');
let BasketItem = require('../../db/models/basketItem.js');

db.connect('mongodb://localhost/geekshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//1 - read JSON
//2 - create Model
//3 - write to DB

function readJSON(urlFile) {
    return new Promise((res, rej) => {
        fs.readFile(urlFile, 'utf-8', (err, data) => {
            if (!err) {
                res(JSON.parse(data));
            } else {
                rej('Error reading file: ' + urlFile);
            }
        })
    });
};

async function writeCollection(array) {
    await array.forEach(async item => {
        try {
            let newProduct = await Products.create({
                name: item.product_name,
                price: item.price,
                // img: item.img ? item.img : 'default',
                img: item.img || 'default',
                type: item.type
            });
            console.log(newProduct.name + ' added');
        }
        catch(err) {
            console.log('Err filling in writing Model: ' + err);
        }
    })
}

async function writeBasketCollection(array) {
    await array.forEach(async item => {
        try {
            let basketItem = await BasketItem.create({
                id_product: item.id_product,
                user_id: item.user_id,
                quantity: item.quantity
            });

            console.log(basketItem.id_product + ' added');
        } catch (e) {
            console.log('Err filling in writing Model: ' + e);
        }
    })
}

readJSON(catalog)
    .then(d => {
        writeCollection(d)
    })
    .catch(d => {console.log(d)})

readJSON(basket)
    .then(basket => { writeBasketCollection(basket.contents) })
    .catch(err => console.log(err))
