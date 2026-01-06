const express = require('express');
const productsRouter = require('./modules/products/products.controller');
const salesRouter = require('./modules/sales/sales.controller');
const suppliersRouter = require('./modules/suppliers/supplier.controller');
const usersRouter = require('./modules/user/user.controller');
const app = express()
app.use(express.json())
app.use(productsRouter)
app.use(salesRouter)
app.use(suppliersRouter)
app.use(usersRouter)

app.listen(3000 , ()=>{
    console.log('server is running')
})






