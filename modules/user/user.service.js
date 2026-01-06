const connection = require('../../src/database/connection');


const create_manager =  (req, res) => {
    connection.query(`CREATE USER  'store_manager'@'localhost' `, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ message: "there is a problem creating user" });
            return;
        }
        connection.query(`GRANT SELECT, INSERT, UPDATE ON store.* TO 'store_manager'@'localhost'`, (err, result) => {
            if (err) {
                console.log(err);
                res.json({ message: "there is a problem " });
                return;
            }
            res.json({ message: "user created succ" });
        });
    });
}


const revoke_manager_update =  (req, res) => {
    connection.query(`REVOKE UPDATE ON store.* FROM 'store_manager'@'localhost'`, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ message: "there is a problem" });
            return;
        }
        res.json({ message: "update permission revoked succ" });
    })
}


const grant_manager_delete_sales = (req, res) => {
    connection.query(`GRANT DELETE ON store.sales TO 'store_manager'@'localhost'`, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ message: "there is a problem " });
            return;
        }
        res.json({ message: "delete permission is succ" });
    });
}

module.exports = {
    create_manager,
    revoke_manager_update,
    grant_manager_delete_sales
}