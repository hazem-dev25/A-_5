const connection = require('../../src/database/connection');

const add_supplier =  (req , res)=>{
    let {name , contactnum} = req.body; 
    connection.query(`INSERT INTO suppliers (name , contactnum) VALUES ('${name}' , '${contactnum}')` , (err , result)=>{
     if(err){
        console.log(err)
        res.json({message: "there is a problem"})
        return
     }
     if(result.affectedRows > 0){
        res.json({message: "the supplier is added succ"})
        return
     }else{
        res.json({message: "failed to add supplier"})
        return;
     }
        
    })
}


const  find_suppliers_name = (req ,res)=>{
    let {litter} = req.body; 
    connection.query(`SELECT * FROM suppliers WHERE name LIKE '${litter}%'` ,(err , result)=>{
        if(err){
            console.log(err)
            res.json({message: "there is a problem"})
            return;
        }
        if(result.length > 0){
            res.json({message: "here is the supplier name" , result})
            return;
        }else{
            res.json({message: "supplier is not found"})
            return;
        }
    })
}

module.exports = {
    add_supplier,
    find_suppliers_name
}