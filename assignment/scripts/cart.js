console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['cherries','apples','bagels'];



function addItem(item) {
    // adds item to basket
    basket.push(item);
  
    return true;
  }
  
  addItem('pie');
  addItem('cheese');
  addItem('bagels');


function listItems(){
for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}
}
listItems();


function empty() {
if(basket.length > 0){
   return basket = [];
  }
  return "add items to basket"
}

console.log(empty());
 


  /* Create a function called `empty`. It should:
  - reset the `basket` to an empty array

*/