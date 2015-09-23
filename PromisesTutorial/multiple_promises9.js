//Task

//Let's build this function!

//1. Construct two promises using Q's defer
//2. Construct a function "all" that accepts two promises as arguments.
//   Your function should create an internal promise using Q's defer and return it!
//   Your function should create a counter variable with initial value of 0.
//   Your function should attach "then" fulfillment handlers to both
//   promises which increment an internal counter and fulfill the function's
//   internal promise with an array containing BOTH values IF the counter reaches 2.
//   You should ALSO attach rejection handlers to both promises which both reject
//   the internal promise!
//3. Pass your two promises into your new function and then attach console.log as 
//   a fulfillment handler to the promise returned by your function.
//4. Attach a function to setTimeout that resolves both of the promises you created
//   and passed to your function with the values "PROMISES" and "FTW" respectively.
//   Set the timeout delay to 200ms.

//   TIP: Don't forget to pass the "promise" attribute of your deferreds!
     
//   If your function is successful it should print out ["PROMISES", "FTW"] which is
//   just someone's opinion man!

//Link Q Library//
var q = require('q')
//Create two promises
  var def1 = q.defer()
  var def2 = q.defer();
//Create an "all" function that accepts two promises as arguments
function all (promise1, promise2) {
	var groupDef = q.defer()
    var counter = 0
    var value1
    var value2;

//Attach a "then" fulfillment handler to both promises
  promise1
  .then(function (result) {
    value1 = result;
    ++counter;
    if (counter >=2) groupDef.resolve([value1, value2]);
  })
  .then(null, groupDef.reject)
  .done();

  promise2
  .then(function (result) {
    value2 = result;
    ++counter;
    if (counter >=2) groupDef.resolve([value1, value2]);
  })
  .then(null, groupDef.reject)
  .done();

  return groupDef.promise;
}

all(def1.promise, def2.promise)
.then(console.log)
.done();

setTimeout(function () {
  def1.resolve("PROMISES");
  def2.resolve("FTW");
}, 200);