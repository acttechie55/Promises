//Task

//Construct a promise chain that returns VALUES to prove to yourself
//that promise handlers will wrap your returned values in promises 
//allowing additional chaining.

//1. Construct a promise using Q's defer
//2. Construct a function "attachTitle" which prepends "DR. " to 
//   its first argument and returns the result.
//3. Build a promise chain off the promise we constructed initially
//   that first calls "attachTitle" then calls console.log.
//4. Resolve the promise you created with a value of "MANHATTAN".

//Link Q Library//
var q = require('q');
//Create a promise using the q library//
var defer = q.defer();

//Create a function attachTitle with "DR." to its first argument and returns the result
function attachTitle (name) {
	return "DR. " + (name);
}

//Create a promise chain 
defer.promise
	.then(attachTitle)
	.then(console.log);

//Resolve the promise with "MANHATTAN"
defer.resolve("MANHATTAN");
