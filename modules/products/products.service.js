const connection = require('../../src/database/connection');

const add_products =  (req ,res)=>{
    let {supplierID , name , price , quantity_stock} = req.body; 
    connection.query(`INSERT INTO products (supplierID , name , price , quantity_stock) VALUES ('${supplierID}' , '${name}' , '${price}' , ${quantity_stock})` , (err ,result)=>{
        if(err){
            console.log(err)
            res.json({message: "there is a problem"})
            return;
        }
        if(result.affectedRows > 0){
            res.json({message: "product is added succ"})
            return
        }else{
            res.json({message: "failed to add product!!"})
        }
    })
}


const update_product_price = (req ,res)=>{
    let {productID , price} = req.body;
    connection.query(`UPDATE products SET price = ${price} WHERE productID = '${productID}' ` , (err ,result)=>{
    if(err){
        console.log(err)
        res.json({message: "there is a problem"})
        return
    }
    if(result.affectedRows > 0){
        res.json({message: "product is upated succ"})
        return
    }else{
        res.json({message: "failed to update product"})
        return;
    }
    })
}


const delete_product =  (req ,res)=>{ 
    let {id} = req.params ;
    connection.query(`DELETE FROM products WHERE productID = '${id}'` , (err , result)=>{
        if(err){
            console.log(err)
            rejects.json({message: "there is a problem"})
            return
        }
        if(result.affectedRows > 0){
            res.json({message: "the product is deleted succ"})
            return;
        }else{
            res.json({message: "failed to delete product"})
            return;
        }
    })
 }


 const get_highest_stock =  (req , res)=>{
    connection.query(`SELECT MAX(quantity_stock) FROM products` , (err ,result)=>{
        if(err){
            console.log(err)
            res.json({message: "there is a problem"})
            return
        }
        if(result.length > 0){
            res.json({message: "here is the highest stock" , result})
            return;
        }else{
            res.json({message: "failed to get the info"})
            return;
        }
    })
    }

    module.exports = {
        add_products,
        update_product_price,
        delete_product,
        get_highest_stock
    }