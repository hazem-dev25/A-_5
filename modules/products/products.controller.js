const express = require('express');
const { add_products, update_product_price, delete_product, get_highest_stock } = require('./products.service');

const router = express.Router();
// b. Insert the following three products, all provided by 'FreshFoods':

router.post('/add_products' , add_products)


// 7- Update the price of 'Bread' to 25.00.

router.patch('/update_product_price', update_product_price)


// 8- Delete the product 'Eggs'. 

router.delete('/delete_product/:id' , delete_product)


 // 10-Get the product with the highest stock. (0.5 Grade)

router.get('/get_highest_stock' , get_highest_stock)

module.exports = router;