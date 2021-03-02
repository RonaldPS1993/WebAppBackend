const pool = require("../../config/database");

module.exports = {
    createWish: (data,callBack) =>{
      pool.query(
          `INSERT INTO book_list(cart_status,cart_total,type_list,cart_name) VALUES("active",0,"wishlist",?)`,
          [
              data.cart_name
          ],
          (error,results,fields) => {
              if(error){
                return callBack(error);
              }
              return callBack(null, results);
          }
      );  
    },
    addBooksToWish: (data,callBack) =>{
        pool.query(
            `INSERT INTO book_count(quantity,subtotal,book_isbn,cart_id) VALUES(1,0,?,?)`,
            [
                data.book_isbn,
                data.cart_id
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                  }
                  return callBack(null, results);
            }
        );
    } 
};