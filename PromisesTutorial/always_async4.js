//Task

//In this lesson, we are going to prove to ourselves that this is the case by 
//writing a script that does the following:

//1. Create a promise using the "Q" library
//2. Pass console.log to the "then" method of our promise
//3. Resolve the promise with a parameter "SECOND"
//4. Print "FIRST" to the console using console.log

//Link Q Library//
var q = require('q');
//Create a promise using the q library//
var defer = q.defer();

defer.promise.then(console.log);
defer.resolve("SECOND"); 
console.log("FIRST");