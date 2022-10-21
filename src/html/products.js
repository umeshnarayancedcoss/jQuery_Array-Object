var products = [
    { "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150 },
    { "id": 102, "name": "Football", "image": "football.png", "price": 120 },
    { "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110 },
    { "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130 },
    { "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100 }
];

let cart_array = [];

$(document).ready(function () {
    var i = 0;
    var str = "<div>"
    products.forEach(element => {
        str += "<div id='product-" + element.id + "' class='product'><img src='images/" + element.image + "'><h3 class='title'><a href='#'>Product " + element.id + "</a></h3><span>Price: $" + element.price + ".00</span><a class='add-to-cart' onclick='cart(" + i++ + ")'>Add To Cart</a></div>"
        str += "</div>"

        //console.log(str);
        document.getElementById('products').innerHTML = str;
    });



});

// --------------------------display function-----------------


function display(){

    var i = 0;
    var str = "<table><tr><th>Product ID</th><th> Product Name</th><th>Product Image</th><th>Product Price</th><th>Product Quantity<th>Action</th></tr>"
    cart_array.forEach(element => {
        var qty = element.quantity;
        var pro_id=element.id;
        str += "<tr><td>" + element.id + "</td><td>" + element.name + "</td><td><img src='./images/" + element.image + "' /></td><td> $" + element.price * element.quantity + ".00</td><td><button style='height:30px;width:40px;' onclick='decrement()'>-</button><input type='number' value=" + element.quantity + " style='height:30px;width:30px;' readonly min='0' /><button style='height:30px;width:40px;' onclick='increment(" + qty + ","+pro_id+")' >+</button></td><td><button id='delete'>Remove</Button></td></tr>"
        str += "</table>"
        // console.log(str);
        document.getElementById('table').innerHTML = str;

    })
}


// -----------------------------------------------------------------

function cart(i) {
    //alert(i);
    console.log(i);

    //console.log(products[i]); 
    var id = products[i].id;
    //  console.log(id);
    var name = products[i].name;
    //console.log(name);
    var price = products[i].price;
    // console.log(price);
    var image = products[i].image;
    // console.log(image);



    var object = { id: id, name: name, price: price, image: image, quantity: 1 };
    cart_array.push(object);
    //console.log(cart_array);

    var i = 0;
    var str = "<table><tr><th>Product ID</th><th> Product Name</th><th>Product Image</th><th>Product Price</th><th>Product Quantity<th>Action</th></tr>"
    cart_array.forEach(element => {
        var qty = element.quantity;
        var pro_id=element.id;
        str += "<tr><td>" + element.id + "</td><td>" + element.name + "</td><td><img src='./images/" + element.image + "' /></td><td> $" + element.price * element.quantity + ".00</td><td><button style='height:30px;width:40px;' onclick='decrement(" + qty + ","+pro_id+")'>-</button><input type='number' value=" + element.quantity + " style='height:30px;width:30px;' readonly min='0' /><button style='height:30px;width:40px;' onclick='increment(" + qty + ","+pro_id+")' >+</button></td><td><button id='delete'>Remove</Button></td></tr>"
        str += "</table>"
        // console.log(str);
        document.getElementById('table').innerHTML = str;

    })

}

// -----------------------increment function-----------------------------------

function increment(qty,pro_id) {
    // alert('ok');
//  console.log(qty);
//console.log(pro_id);
var quantity=qty;
// alert(quantity);

var pro_id=pro_id;

if(quantity>=0){
    quantity++;
        // alert(quantity);

        objIndex = cart_array.findIndex((obj => obj.id == pro_id));
        //  console.log(objIndex);
        cart_array[objIndex].quantity =quantity;
         //console.log("After update: ", cart_array[objIndex])
       
     display();
}
}
// -------------------------------------Decrement function-----------------------------------



function decrement(qty,pro_id) {
    // alert('ok');
//  console.log(qty);
//console.log(pro_id);
var quantity=qty;
// alert(quantity);

var pro_id=pro_id;

if(quantity>=0){
    quantity=quantity-1;
        //alert(quantity);

        objIndex = cart_array.findIndex((obj => obj.id == pro_id));
         console.log(objIndex);
        cart_array[objIndex].quantity =quantity;
         console.log("After update: ", cart_array[objIndex])
       
   display();
   
}
}

////////////////////------------------------------------------

