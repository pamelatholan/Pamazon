# Pamazon
###CLI Storefront
####An Amazon-like storefront utilizing MySQL and Node.js.  The app will take in orders from customers and deplete stock from the store's inventory.

###Customer CLI
* Create a MySQL Database.
* Create a Table inside of that database called products.
* The products table should have each of the following columns:
    * item_id (unique id for each product)
    * product_name (Name of product)
    * department_name
    * price (cost to customer)
    * stock_quantity (how much of the product is available in stores)
* Populate this database with 10 different products. 
* Create a Node application. Running this application will first display all of the items available for sale. Include the id, name, department, price and stock of products for sale.
* The app then prompts users for what they would like to do.
    * Would you like to view inventory?
    * Would you like to purchase an item?
    * What item would you like to purchase?
    * What quantity would you like to purchase?
* The app then summarizes what the customer's order is and asks for confirmation to make purchase.
* Once the transaction is complete, the prompts restart.
* Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.
* If not, the app logs a phrase about not being able to fulfill that quantity, and then prevents the order from going through.
* Purchases update the SQL database to reflect the remaining quantity.
