/*Write a function called cashRegister that takes a shopping cart object. 
The object contains item names and prices (itemName: itemPrice). 
The function should return the total price */

var cartForParty = {
    bananas: "1.80",
    strawberries: "5.99",
    carrots: "3.50",
    spinach: "4.50",
    avocado: "2.00",
    tomatoes: "4.00"
};

function cashRegister(cart) {
    var items = Object.keys(cart);
    var sum = 0;
    
  for ( var i = 0; i < items.length; i++) {
        var itemName = items[i];
        var itemPrice = cart[itemName];
        sum += Number.parseFloat(itemPrice);
    }
    return sum;
}

document.getElementById("btn").innerHTML = cashRegister (cartForParty);