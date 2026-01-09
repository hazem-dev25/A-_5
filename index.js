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



app.post('/add_colm', (req, res) => {
    connection.query('ALERT TABLE products ADD colunm varchar(150)', (err, result) => {
        if (err) {
            console.log(err);
            res.json('Error adding column');
            return;
        }if (result.affectedRows > 0) {
            res.json('Column added successfully');
            return
        } else {
            res.json('failed to add column');
            return
        }
    })
})


app.post('/remove_colm', (req, res) => {
    connection.query('ALTER TABLE products DROP  colunm', (err, result) => {
        if (err) {
            console.log(err);
            res.json('Error removing column');
            return;
        }if (result.affectedRows > 0) {
            res.json('Column removed successfully');
            return
        } else {
            res.json('failed to remove column');
            return
        }
})})


app.post('/modify_colm', (req, res) => {
    connection.query(`ALTER TABLE suppliers MODIFY contactnum varchar(15)`, (err, result) => {
        if (err) {
            console.log(err);
            res.json('Error modifying column');
            return;
        }
        if (result.affectedRows > 0) {
            res.json('Column modified successfully');
            return
        } else {
            res.json('failed to modify column');
            return
        }   
})})



app.post('/revalue_name' ,(req,res)=>{
    connection.query(`ALTER TABLE products MODIFY name varchar(150) NOT null`, (err, result) => {
        if (err) {
            console.log(err);
            res.json('Error revaluing column');
            return;
        }if (result.affectedRows > 0) {
            res.json('Column revalued successfully');
            return
        } else {
            res.json('failed to revalue column');
            return
        }
})})






