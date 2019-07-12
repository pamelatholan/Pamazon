require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table-redemption");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayProducts();
  });

  var displayProducts = function(){
    var query = "Select * FROM products";
    connection.query(query, function(err, res){
      if(err) throw err;
      var displayTable = new table ({
        head: ["Item ID", "Product Name", "Department", "Price", "Quantity"],
        colWidths: [10,25,25,10,14]
      });
      for(var i = 0; i < res.length; i++){
        displayTable.push(
          [res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
          );
      }
      console.log(displayTable.toString());
      connection.end();
    });
  }
