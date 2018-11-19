// ***************************************************

//the code in this document is self-contained; the code that runs the cart, and we can import this into every page. 

// Shopping Cart functions

var shoppingCart = (function () {
    //Private methods and properties -->
    //array called "cart" which contains/hold all our shopping cart items -->

    var cart = [];

    //creating a system that will generate objects that will store in our previous cart array -->

    function Item(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    }

    //A common use of JSON is to exchange data to/from a web server.
    //When sending data to a web server, the data has to be a string.
    //Convert a JavaScript object into a string with JSON.stringify().
    //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    //The localStorage object stores the data with no expiration date.
    //The setItem() method of the Storage interface, when passed a key name and value, will add that key to the storage.


    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();


    // Public methods and properties
    var obj = {};

    // for (var i in cart) = indicates that we loop through every item in the cart 
    // were going to look at each item individually --> look at the name property and match it with name (name === name)
    // if they match = we will increase the count of that item. 
    // cart[i].count; lets us increase the count of the item after the loop
    
    obj.addItemToCart = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count; //add count to whatever value of count property here is. 
                saveCart();
                return; //return; this will end our function and break the loop
            }
        }

        console.log("addItemToCart:", name, price, count);

        var item = new Item(name, price, count); //we only want this code, if we dont find the item in the cart (above loop). this creates a new item.
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };

    obj.removeItemFromCart = function (name) { // Removes one item
        for (var i in cart) {
            if (cart[i].name === name) {       // "3" === 3 false, (triple equal checks whether the value to the left and right is the same value and type.)
                cart[i].count--;               // cart[i].count -- (subtracting 1)
                if (cart[i].count === 0) {     // we dont want the name of to appear in the cart, if there is zero items. 
                    cart.splice(i, 1);         // The splice() method adds/removes items to/from an array, and returns the removed item(s).
                                               // in this case our position is item [i] and the number we want to remove 1. 

                }
                break;
            }
        }
        saveCart();
    };

    obj.removeItemFromCartAll = function (name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);                // in this case, we just need to find the item, and splice it out of the array. 
                break;
            }
        }
        saveCart();
    };

    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    obj.countCart = function () { // -> return total count
        var totalCount = 0;        
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    // .toFixed() function is going to round the numeric values to a fixed number of decimal places.
    // the (2) after toFixed, indicates that we want two decimal places, which we want when showing the price. 

    obj.totalCart = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;  // the "+=" adds the price for each item in the cart.
        }
        return totalCost.toFixed(2);                     // to.Fixed(2) = Convert a number into a string, keeping only two decimals.

    };

    //the property ".total" = adds the total of the name and the price. 

    obj.listCart = function () { // -> array of Items
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {              // looping through every property in item
                itemCopy[p] = item[p];         // make that a property in Copy and give it the same value
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------
    return obj;
})();


