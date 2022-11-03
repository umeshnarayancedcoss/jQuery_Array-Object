//Initilizing products array----------
var products = [
    { "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150 },
    { "id": 102, "name": "Football", "image": "football.png", "price": 120 },
    { "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110 },
    { "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130 },
    { "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100 }
];
let cart_array = []; //Declaring cart array for cart----------
// -------------Display Products Dynamically for Add to Cart-------
var i = 0; //for generating index of the product--
var str = "<div>"
products.forEach(element => {
    str += "<div id='product-" + element.id + "' class='product'><img src='images/" + element.image + "'><h3 class='title'><a href='#'>Product " + element.id + "</a></h3><span>Price: $" + element.price + ".00</span><a class='add-to-cart' value='" + i++ + "'>Add To Cart</a></div>"
    str += "</div>"
    document.getElementById('products').innerHTML = str;
});
// --------------display function for showing cart table-----------------
function display() {
    var total = 0; //for total price of the cart------------
    if (cart_array.length == 0) {
        total = 0;
        var table = "<h2>Your cart is empty, please add some products..!!</h2>"
        document.getElementById('table').innerHTML = table;
        document.getElementById('total').innerHTML = "";
    } else {
        var table = "<button class='empty_cart'>Empty Cart</button><table><tr><th>Product ID</th><th> Product Name</th><th>Product Image</th><th>Product Price</th><th>Product Quantity<th>Action</th></tr>";
        cart_array.forEach(element => {
            var qty = element.quantity;
            var pro_id = element.id;
            table += "<tr><td>" + element.id + "</td><td>" + element.name + "</td><td><img src='./images/" + element.image + "' /></td><td> $" + element.price * element.quantity + ".00</td><td><button class='decrease' value='" + element.id + "'>-</button><span class='number'>" + element.quantity + " </span><button class='increase' value='" + element.id + "' >+</button></td><td><button class='remove' value='" + element.id + "' >Remove</Button></td></tr>"
            total = total + (element.price * element.quantity);
            table += "</table>"
            document.getElementById('table').innerHTML = table;
            var t_amount = "<h1>Total: $" + total + ".00 <h1>";
            document.getElementById('total').innerHTML = t_amount;
        });
    }
}
$(document).ready(function () { //jQuery Starts Here-----
    // -----------------Add to Cart---------------------------------
    $(".add-to-cart").on("click", function () {
        var pro_index_id = $(this).attr("value");
        var pro_quantity = 1;
        var pro_price = products[pro_index_id].price;
        var pro_image = products[pro_index_id].image;
        var pro_given_id = products[pro_index_id].id;
        var pro_name = products[pro_index_id].name;
        if (cart_array.length == 0) { //If cart will be blank-----
            var object = { index_id: pro_index_id, id: pro_given_id, name: pro_name, image: pro_image, price: pro_price, quantity: pro_quantity };
            cart_array.push(object);
        } else if (cart_array.length > 0) { //if cart will not be blank but same product already exists--
            var flag = 0;
            cart_array.forEach((element) => {
                if (element.index_id == pro_index_id) {
                    flag = 1;
                    element.quantity = element.quantity + 1;
                }
            });
            if (flag == 0) { //if same product not exists in cart---
                var object = { index_id: pro_index_id, id: pro_given_id, name: pro_name, image: pro_image, price: pro_price, quantity: pro_quantity };
                cart_array.push(object);
            }
        }
        display();
    });
    // -----------------------Increase Counter--------------------------
    $(document).on("click", ".increase", function () {
        var pro_id = $(this).attr("value");
        var pro_index = cart_array.findIndex((obj => obj.id == pro_id));
        cart_array[pro_index].quantity = cart_array[pro_index].quantity + 1;  //quantity increase by 1-------
        display();
    });
    // ----------Decrease Counter--------------------------------------------
    $(document).on("click", ".decrease", function () {
        var pro_id = $(this).attr("value");
        var pro_index = cart_array.findIndex((obj => obj.id == pro_id));
        if (cart_array[pro_index].quantity == 1) { //if quantity will be then it will remove from cart--
            cart_array.splice(pro_index, 1);
            alert("Product removed from cart successfully..!!");
        } else {
            cart_array[pro_index].quantity = cart_array[pro_index].quantity - 1; //quantity decrease by 1------
        }
        display();
    });
    // ---------------------Empty Cart-------------------------------------------
    $(document).on("click", ".empty_cart", function () {
        cart_array = [];
        alert("Cart Removed successfully..!!");
        display();
    });
    //-----------------Remove items from cart table-----------------------
    $(document).on("click", ".remove", function () {
        var pro_id = $(this).attr("value");
        var pro_index = cart_array.findIndex((obj => obj.id == pro_id));
        cart_array.splice(pro_index, 1);
        alert("Product removed from cart successfully..!!");
        display();
    });
}); //jQuery Ends Here------------------------

