const express = require('express');
const { add_saleInfo, get_sold_products, never_sold_products, get_all_sales_info } = require('./sales.service');
const router = express.Router();
// c. Add a record for the sale of 2 units of 'Milk' made on '2025-05-20'.

router.post('/add_saleInfo' , add_saleInfo)

//  9- Retrieve the total quantity sold for each product. 

router.get('/get_sold_products' , get_sold_products)

// 12-Show all products that have never been sold. 

router.get('/never_sold_products' ,  never_sold_products)

// 13-Get all sales along with product name and sale date.

router.get('/get_all_sales_info' , get_all_sales_info)

module.exports = router;