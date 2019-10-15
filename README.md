# Pamazon
An Amazon-like storefront utilizing MySQL and NodeJS.  The app will take in orders from customers and deplete stock from the store's inventory.

### Customer CLI
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

![Prompt](https://github.com/pamelatholan/Pamazon/blob/master/images/welcome.PNG)

        *  Yes displays Inventory:
![Inventory](https://github.com/pamelatholan/Pamazon/blob/master/images/inventory.PNG)
        * No displays message:

![No](https://github.com/pamelatholan/Pamazon/blob/master/images/no_purchase.PNG)

    * Would you like to purchase an item?
    * What item would you like to purchase?
    * What quantity would you like to purchase?
* The app then summarizes what the customer's order is and asks for confirmation to make purchase.
![Confirm](https://github.com/pamelatholan/Pamazon/blob/master/images/purchase.PNG)
* Once the transaction is complete, the prompts restart.
![Complete](https://github.com/pamelatholan/Pamazon/blob/master/images/purchase_confirm.PNG)
* Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.
* If not, the app logs a phrase about not being able to fulfill that quantity, and then prevents the order from going through.

![Not Enough](https://github.com/pamelatholan/Pamazon/blob/master/images/no_stock.PNG)
* Purchases update the SQL database to reflect the remaining quantity.
![Starting Stock](https://github.com/pamelatholan/Pamazon/blob/master/images/starting_stockqty.PNG)
![After Purchase](https://github.com/pamelatholan/Pamazon/blob/master/images/qty_afterpurch.PNG)

### Manager CLI
* List a set of menu options for Store Managers to monitor their products
    * View Products for Sale
    * View Low Inventory
    * Update Inventory
    * Add New Product

![Manager View](https://github.com/pamelatholan/Pamazon/blob/master/images/manager_options.PNG)

* View Products for Sale

![Inventory](https://github.com/pamelatholan/Pamazon/blob/master/images/view_inventory.PNG)

* View Low Inventory

![Low Inventory](https://github.com/pamelatholan/Pamazon/blob/master/images/low_inventory.PNG)

* Update Inventory

![Update](https://github.com/pamelatholan/Pamazon/blob/master/images/update.PNG)

* Add Inventory

![Add](https://github.com/pamelatholan/Pamazon/blob/master/images/add.PNG)

### Tools/Languages Used:
* MySQL
* NodeJS
* JavaScript
