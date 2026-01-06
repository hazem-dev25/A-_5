const sql = require('mysql2')


const connection = sql.createConnection({
    host: "localhost" ,
    user: "root" ,
    password: "" ,
    database: "store"
})

connection.connect((err)=>{
    if(err){
        console.log('failed to connect database')
    }else{
        console.log('connect with database succ')
    }
})
module.exports = connection