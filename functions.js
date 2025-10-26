// Named function 

function greet() {
 return 'Hello';
}

console.log(greet(),'Named function')


// Function Expression 

const run = function () {
 return "running" 
}

const add = function addTwoNum(a,b) {
 return a + b; 
}
console.log(run(),'Function Expression 1') 
console.log(add(2,4),'Function Expression 2')

// Anonymous Function 

const work = function (params) {
  return "working"  
}
console.log(work(),'Anonymous Function')

// Arrow Function 

const arrow = () => {
  return "arrow function is here"
}

console.log(arrow())

var message = "Global message";

function showMessage() {
  var message = "Local message"; // This "shadows" the global variable
  console.log(message); // Accessing the local variable
}

showMessage();
console.log(message); // Accessing the global variable
