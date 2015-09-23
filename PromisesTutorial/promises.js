//Goal: Pass console.log to the then method of your promise
//Manually resolve that promise using setTimeout with a delay of 300s and pass it a parameter of "RESOLVED!"
//Given by the program

//Note: Use the popular "Q" library to create a promise//
var q = require('q');
//In the "Q" library, promises are created using Q.defer();//
var defer = q.defer();
//actual promise itself//
defer.promise.then(console.log);
//Manual Specs//
setTimeout(defer.resolve, 300,'RESOLVED!');
//What do you want it to do(variable for defer.resolve, amountoftime, string);
