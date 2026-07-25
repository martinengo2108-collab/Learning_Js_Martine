 
 console.log('Hello World');


function happyBirthday(username, age){
  console.log('Happy birthday to you');
  console.log('Happy birthday to you');
  console.log(`Happy birthday dear ${username} you!`);
  console.log('Happy birthday to you');
  console.log(`You are ${age} years old`);
}

happyBirthday("Martine", 7);
function sayHello() {
  return "Hello World";
}

let message = sayHello();
console.log(message)

function substract(x, y){
  answer= x-y;
  return answer;
}
console.log(substract(4 ,7));
function isEven(num){

  if(num % 2== 0){
    return true;
  }
  else{
    return false
  }
}

console.log(isEven(13));
function isEven(num){
  return num %2 == 0? true: false;
}
console.log(isEven(23));
function area(l, w){
  return l*w;
}
console.log(area(10,5));

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
x = findMax(1, 123, 500, 115, 44, 88);
console.log(x)
/*Learning arrays and arrays methods*/

let fruits = ['mango','banana','pear','water melon','orange','pawpaw'];
fruits.push('coconut');
//fruits.pop();
fruits.unshift('sugar cane');
fruits.shift();


console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[5]);
console.log(fruits.length);

console.log(fruits.indexOf('pear'));
for(let i=fruits.length-1; i>=0; i--){

  console.log(fruits[i]);
}
for(let fruit of fruits){

  console.log(fruit);
}


console.log(Array.from("foo"));

//console.log(fruits.slice(2,4));
console.log(fruits.splice(2,5));
console.log(fruits);

let Cart= [];
let Prices=[];

function addItems(item,prices){
  Cart.push(item);
  Prices.push(prices);

  console.log(`${item} was added to the list`);
}
function RemoveItem(item,prices){
  let index1 = Cart.indexOf(item);

  let index2 = Prices.indexOf(prices);
  if(index1 !== -1 && index2 !== -1 ){
    Cart.splice(index1,1);
    
    Prices.splice(index2,1);
  }
  else{
      console.log(`${item} is not in the cart`);
  }
}

addItems('mango',100);
addItems('banana',200);
addItems('pear',50);

addItems('water melon',500);

console.log(Cart);

RemoveItem('banana',200);
console.log(Cart);
console.log(Prices);

function displayCart() {
    let total = 0;

    for (let i = 0; i < Cart.length; i++) {
        console.log(`${Cart[i]} - $${Prices[i]}`);
        total += Prices[i];
    }

    console.log("Total: $" + total);
}
displayCart();

const person1 = {
  FirstName: 'Martine',
  LastName:'Boumkwo',
  IsStudent:'true',
  Greetings:function(){console.log('Nice to meet you')}
}

const person2 = {
  FirstName: 'Moon',
  LastName:'Kennedy',
  IsStudent:'true',
  Greetings:function(){console.log('Nice to meet you')}
}

