var mysql = require('mysql');
var inq = require("inquirer");

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "bamazon",
    database: "bamazon",
    port: 3306
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
  });

function displayProducts(){
    var q = con.query("SELECT * FROM products",
        (err, itemList) => {
            if (err) throw err;
            productData = itemList;
            console.table(itemList, ["item_id" ,"product_name", "stock_quantity", "price"]);
            // purchasePrompt();
        });
}

function purchaseProduct(id, qty){
    var q = con.query('SELECT * FROM products',
        (err, itemList) => {
            if (err) throw err;
            productData = itemList;
            let found = false;
            productData.forEach(element => {
                if(element.item_id == id){
                    found = true;
                    let updated_qty = element.stock_quantity - qty;
                    let total_amount = qty * element.price;
                    console.log("You are purchasing: " + element.product_name);
                    if(updated_qty >= 0){
                        
                        
                        
                        con.query("UPDATE products SET stock_quantity = ? WHERE item_id=?", 
                        [updated_qty, element.item_id],
                        (err, queryRes) => {
                            if (err) throw err;
                            console.log("Thank you for your purchase, the total was: " + total_amount);
                        });



                    }else {
                        console.log("Sorry, not enough quantity left");
                    }
                }
                
                
            });
            if(!found) {
                console.log("item not found");
             }
            // console.table(itemList, ["id" ,"product_name", "price"]);
            // purchasePrompt();
        });
}

function promptUser(){
    inq.prompt([
        {
            type: "input",
            message: "Please enter the id of the product you would like to buy",
            name: "product_id"
        },
        {
            type: "input",
            message: "How many would you like to buy?",
            name: "quantity"
        },
    ]).then(function (res) {
        let prod_id = res.product_id;
        let prod_qty = res.quantity;
        console.log("You have selected: " + prod_id);  
        console.log("Quantity: " + prod_qty);
        purchaseProduct(prod_id, prod_qty);
    });
}

displayProducts();
promptUser();