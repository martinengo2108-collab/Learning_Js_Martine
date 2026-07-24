 
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