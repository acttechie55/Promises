//Link Q Library//
var q = require('q');
//Create a promise using the q library//
var defer = q.defer();

//create a promise with two arguments & console.log on each arguments//
defer.promise.then(console.log, console.log);
// Resolve the promise with a value of "I FIRED"
defer.resolve("I FIRED");
//Reject the promise with a value of "I DID NOT FIRE"
defer.reject("I DID NOT FIRE");