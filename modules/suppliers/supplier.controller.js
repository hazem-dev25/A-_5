const express = require('express');
const { add_supplier, find_suppliers_name } = require('./suplier.service');
const router = express.Router();
// a. Add a supplier with the name 'FreshFoods' and contact number '01001234567'.

router.post('/add_supplier' ,add_supplier)


// 11-Find suppliers with names starting with litter (?). 

router.get('/find_suppliers_name' , find_suppliers_name)

module.exports = router;