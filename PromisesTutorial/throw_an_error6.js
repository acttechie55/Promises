//Task

//Let's build exactly the system discussed above.  
//Some invalid JSON will be available on process.argv[2];

//1. Build a function called parsePromised that creates a promise,
// performs JSON.parse in a try/catch block, and resolves or rejects
// the promise depending on whether an error is thrown.
// **NOTE** your function should synchronously return the promise!
// 2. Build a sequence of steps like the ones shown above that catches
// any thrown errors and logs them to the console.

//Link Q Library//
var q = require('q');
// 1) Create parsePromised function
function parsePromised (json) {
// 2) create a deferred promise  
  var def = q.defer();
  var result;
// 3) perform JSON.parse in a try/catch block
  try {
    result = JSON.parse(json);
  } catch (e) {
    def.reject(e);
  }
// 4) resolve the promise if no error
  def.resolve(result);
  return def.promise;
};

parsePromised(process.argv[2])
.then(null, console.log)