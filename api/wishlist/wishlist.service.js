const pool = require("../../config/database");

module.exports = {
    createWish: (data,callBack) =>{
      /*pool.query(
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
      ); */
      pool.query(
            `INSERT INTO book_list(cart_status,cart_total,type_list,cart_name,customer_id)
            SELECT "active",0,"wishlist",?,?
            FROM  dual
            WHERE (select count(*)  FROM book_list  WHERE customer_id = ?) < 3;
            `,
            [
                data.cart_name,
                data.customer_id,
                data.customer_id
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
            `INSERT INTO book_count(quantity,subtotal,book_isbn,cart_id)
            SELECT * FROM (SELECT 1,0,?,?) as tmp
            WHERE NOT EXISTS(SELECT book_isbn,cart_id FROM book_count WHERE book_isbn = ? AND cart_id = ?)`,
            [
                data.book_isbn,
                data.cart_id,
                data.book_isbn,
                data.cart_id,
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                  }
                  return callBack(null, results);
            }
        );
    },
    getWish: (cart_id,callBack) =>{
        pool.query(
            `SELECT * FROM (SELECT books.book_title, book_count.book_count_id,book_count.cart_id FROM book_count LEFT JOIN books on books.book_isbn = book_count.book_isbn) AS res1 
            WHERE cart_id = ?`,
            [
                cart_id,
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                  }
                  return callBack(null, results);
            }
        );
    },
    getWishNum: (customer_id,callBack) =>{
        pool.query(
            `SELECT cart_id,cart_name FROM book_list WHERE customer_id = ? and type_list = "wishlist"`,
            [
                customer_id,
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                  }
                  return callBack(null, results);
            }
        );
    },
    changeWish: (data,callBack) =>{
        pool.query(
            `UPDATE book_count SET cart_id = ? WHERE book_count_id = ?`,
            [
                data.cart_id,
                data.book_count_id
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                  }
                  return callBack(null, results);
            }
        );
    },
    deleteItem: (data,callBack) =>{
        pool.query(
            `DELETE FROM book_count WHERE book_count_id = ?`,
            [
                data.book_count_id
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                  }
                  return callBack(null, results);
            }
        );
    },
    getShopping: (customer_id,callBack) =>{
        pool.query(
            `SELECT cart_id FROM book_list WHERE customer_id = ? AND type_list = "Shopping Cart"`,
            [
                customer_id
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                  }
                  return callBack(null, results);
            }
        );
    },
    getCount: (customer_id,callBack) =>{
        pool.query(
            `SELECT COUNT(cart_id) AS wish_count FROM book_list where customer_id = ? and type_list = "wishlist"`,
            [
                customer_id
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