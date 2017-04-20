// array of shopping list item names and prices
var groceryStore = [
  { name:'apples', total:1 },
  { name:'bread', total:1.25 },
  { name:'eggs', total:1.50 },
  { name:'flour', total:1.75 },
  { name:'meat', total:2 },
  { name:'milk', total:2.25 },
  { name:'potatoes', total:2.50 },
  { name:'carrots', total:2.75 },
  { name:'bannanas', total:3 },
  { name:'scorpions', total:3.25 },
]
// container for list and totals
var cont = document.getElementById('cont');
// function that prints current array and calculates prices
function makeList() {
// appends the name and prices to the html doc
var list = document.createElement('ul');
for(var i=0; i<groceryStore.length;i++){
var listItems = document.createElement('li');
listItems.innerText = groceryStore[i].name +': $' + groceryStore[i].total;
list.appendChild(listItems);
}
cont.appendChild(list);
// calculates subtotal, tax, final total
var subTotal = 0;
groceryStore.forEach(function(i){
  subTotal += i.total;
});
var tax = subTotal * 0.06;
var finalTotal = subTotal + tax;
// prints subtotal, tax, final total to html
var p1 = document.getElementById('p1');
p1.innerText = 'Subtotal: $'+subTotal.toFixed(2);
var p2 = document.getElementById('p2');
p2.innerText = 'Tax: $'+tax.toFixed(2);
var p3 = document.getElementById('p3');
p3.innerText = 'Total: $'+finalTotal.toFixed(2);
}
//adds submitted values to list, deletes old list, and reprints new list
var submit = document.getElementById('add');
submit.addEventListener('click', function() {
var newItemName = document.getElementById("name").value;
var newItemPrice = document.getElementById("price").value;
groceryStore.push( { name: newItemName, total: Number(newItemPrice) } );
console.log(newItemName);
console.log(groceryStore);
while (cont.firstChild) {
  cont.removeChild(cont.firstChild)
};
  makeList();
});
makeList();

//prints names and totals to console
// groceryStore.forEach(function(i){
//   console.log(i.name );
//   console.log('$' + i.total);
//
// });
//prints subtotal, tax, final total to console
// console.log('Subtotal: $' + subTotal);
// console.log('Tax: $' + tax.toFixed(2));
// console.log('Total: $' + finalTotal.toFixed(2));
