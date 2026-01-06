const express = require('express');
const { create_manager, revoke_manager_update, grant_manager_delete_sales } = require('./user.service');
const router = express.Router();
// 14-Create a user “store_manager” and give them SELECT, INSERT, and UPDATE permissions on all tables

router.post('/create_manager', create_manager)



// 15-Revoke UPDATE permission from “store_manager”. 

router.patch('/revoke_manager_update', revoke_manager_update);


// 16-Grant DELETE permission to “store_manager” only on the Sales table.

router.patch('/grant_manager_delete_sales',  grant_manager_delete_sales)


module.exports = router;