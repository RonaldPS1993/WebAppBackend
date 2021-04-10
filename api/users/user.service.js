const pool = require("../../config/database");

//from DB getting customer_profile
module.exports = {
    create: (data, callBack) => {
        pool.query(
            'INSERT INTO customer_profile(customer_id, cust_first_name, cust_last_name, passwords, phone_number, nickname) VALUES(?,?,?,?,?,?)',
            [
                data.customer_id,
                data.cust_first_name,
                data.cust_last_name,
                data.passwords,
                data.phone_number,
                data.nickname,
            ],
            (error, results, fields) => {
                if (error){
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            'SELECT customer_id, cust_first_name, cust_last_name, passwords, phone_number, nickname FROM customer_profile',
            [],
            (error, results, fields) => {
                if (error) {
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            'SELECT customer_id, cust_first_name, cust_last_name, passwords, phone_number, nickname from customer_profile WHERE customer_id = ?',
            [id],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            'UPDATE customer_profile set cust_first_name=?, cust_last_name=?, passwords=?, phone_number=?, nickname=? WHERE customer_id = ?',
            [
                data.cust_first_name,
                data.cust_last_name,
                data.passwords,
                data.phone_number,
                data.nickname,
                data.customer_id
            ],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            'DELETE from customer_profile WHERE customer_id = ?',
            [data.customer_id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUsername: (customer_id, callBack) => {
        pool.query(
            'SELECT * FROM customer_profile WHERE customer_id = ?',
            [customer_id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    createAddress: (data, callBack) => {
        pool.query(
            'INSERT INTO customer_address(address, city, state, zip, customer_id) VALUES (?,?,?,?, (SELECT customer_id FROM customer_profile WHERE customer_id = ? ))',
            [
                data.address,
                data.city,
                data.state,
                data.zip,
                data.customer_id
            ],
            (error, results, fields) => {
                if (error){
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    
};