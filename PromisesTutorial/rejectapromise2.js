//Link Q Library//
var q = require('q');
//Create a promise using the q library//
var defer = q.defer();

//Run an error function that will print an error message using console.log//
function printError (err) {
  console.log(err.message); 
}

//This passes the above function as a rejection handler to the "then" method
defer.promise.then(null, printError);
setTimeout(defer.reject, 300, new Error("REJECTED!"));