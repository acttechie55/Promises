//Task

//We are going to demonstrate this to ourselves by creating a chain
//of functions that ALL print to the console.  

//1. Create a function "throwMyGod" that throws an Error with 
//   text "OH NOES"
//2. Create a function "iterate" that prints the first argument 
//   (an integer) to it and then returns that argument + 1;
//3. Create a promise chain that wraps your iterate method using Q's
//   fcall then a series of iterations that attempts to perform iterate
//   10 times.  
//4. Attach console.log as a rejection handler at the bottom of your
//   chain.
//5. Insert a call to "throwMyGod" after your 5th call of "iterate"

//If you have done this correctly, your code should print 1,2,3,4,5, 
//"[Error: OH NOES]".  It's important to notice that the thrown exception was 
//turned into a rejected promise which caused the rejected promise to 
//travel down the promise chain to the first available rejection handler.

//Link Q Library//
var q = require('q');
//1) Create a function "throwMyGod" that throws an Error with text "OH NOES"
function throwMyGod () {
  throw new Error("OH NOES");
};
//2)  Create a function "iterate" that prints the first argument (an integer) to it and then returns that argument + 1;
function iterate (num) {
  console.log(num);
  return ++num;
};

//3) Create a promise chain 
q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
//4) Insert a call to "throwMyGod" after your 5th call of "iterate"
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
//5) Attach console.log as a rejection handler at the bottom of your chain.
.then(null, console.log);