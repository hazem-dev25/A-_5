const connection  = require('../../src/database/connection');

const add_saleInfo =  (req ,res)=>{
    let {productID , quantity_sold , sale_date} = req.body;
    connection.query(`INSERT INTO sales (productID , quantitysold , saleDate) VALUES ('${productID}' , '${quantity_sold}' , '${sale_date}')` ,(err ,result)=>{
      if(err){
        console.log(err)
        res.json({message: "there is a problem"})
        return;
      }  
      if(result.affectedRows > 0){
        res.json({message: "sale info added succ"})
        return;
      }else{
        res.json({message: "failed to add info"})
        return;
      }
    })
}


const get_sold_products =  (req, res)=>{
    let {productID}  = req.body
    connection.query(`SELECT quantitysold FROM sales WHERE productID = '${productID}' ` , (err ,result)=>{
        if(err){
            console.log(err)
            res.json({message: "there is a problem"} )
            return;
        }
        if(result.length > 0 ){
            res.json({message: "here is product info" , result})
            return;
        }else{
            res.json({message: "this product has not sold yet!" })
            return;
        }
    })
}


const never_sold_products = (req ,res)=>{
    connection.query(`SELECT p.name FROM products p  LEFT JOIN sales s ON p.productID = s.productID WHERE  s.productID IS null` , (err , result)=>{
        if(err){
            console.log(err)
            res.json({message: "there is problem"})
            return;
        }
        if(result.length > 0){
            res.json({message: "this product is never sold" , result})
            return
        }else{
            res.json({message: "all products have been sold"})
        }
    })
}


const get_all_sales_info = (req ,res)=>{
    connection.query(`SELECT p.name , s.saleDATE FROM products p INNER JOIN sales s ON p.productID = s.productID ` ,(err ,result)=>{
        if(err){
            console.log(err)
            res.json({message: "there is problem"})
            return
        }
        if(result.length > 0){
            res.json({message: "here is sales info" , result})
            return
        }else{
            res.json({message: "failed to get sales info"})
            return
        }
    })
}

module.exports = {
    add_saleInfo,
    get_sold_products,
    never_sold_products,
    get_all_sales_info
}