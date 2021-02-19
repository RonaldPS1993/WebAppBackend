const pool = require("../../config/database");

//from DB getting customer_profile
module.exports = {
    create: (data, callBack) => {
        pool.query(
            'INSERT INTO customer_profile(cust_first_name, cust_last_name, passwords, phone_number, nickname, email) VALUES(?,?,?,?,?,?)',
            [
                data.cust_first_name,
                data.cust_last_name,
                data.passwords,
                data.phone_number,
                data.nickname,
                data.email
            ],
            (error, results, fields) => {
                if (error){
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};