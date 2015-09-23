//Wrapping a value or synchronous function call in a promise is a 
//fairly easy pattern to capture in a generic way.

//The "Q" library has a function for just this purpose called fcall.

//Task

//Use fcall to replace the entire parsePromised function from the previous lesson.

//Link Q Library//
var q = require('q');
//Implemednt fcall
q.fcall(JSON.parse, process.argv[2])
.then(null, console.log)