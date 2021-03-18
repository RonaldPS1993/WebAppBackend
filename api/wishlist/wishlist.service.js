const pool = require("../../config/database");

module.exports = {
    createWish: (id,data,callBack) =>{
      pool.query(
          `INSERT INTO book_list(cart_status,cart_total,type_list,cart_name,customer_id)
          SELECT "active",0,"wishlist",?,?
          FROM  dual
          WHERE (select count(*)  FROM book_list  WHERE customer_id = ?) < 3;
          `,
          [
              data.cart_name,
              id,
              id
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