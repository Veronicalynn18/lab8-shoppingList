var total=0;
var shoppingList=[

  {name: "Cheerios ",
  price:3.00},
  {name: "Bread ",
  price:2.00},
  {name: "Milk ",
  price:2.50},
  {name: "Eggs ",
  price:1.50}
];



for (var i=0; i<shoppingList.length; i++){
  console.log(shoppingList[i].name, "$" + shoppingList[i].price.toFixed(2));
   var printedList = document.createElement('div');
    printedList.innerHTML = shoppingList[i].name + "$" + shoppingList[i].price.toFixed(2);

    document.body.appendChild(printedList);
}
 shoppingList.totalAmount = function(){

   var total = 0;
        for (var i = 0; i < shoppingList.length; i++) {
        total = total + shoppingList[i].price;
             }
       return total.toFixed(2);
 };
var printedTotal = document.createElement('div');
printedTotal.innerHTML = "Total $ " +shoppingList.totalAmount();
document.body.appendChild(printedTotal);


var input = function addToList(){
  var newItemName = document.getElementById('itemName').value;
  var newItemPrice = document.getElementById('itemPrice').value;

  // // var obj =(
  //   name:newItemName,
  //   price:newItemPrice
  // // );
}
