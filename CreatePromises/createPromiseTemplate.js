var APromise = {};

APromise.all = function(promises){
	return Promise.all(promises);
};

APromise.race = function(promises){
	return Promise.race(promises);
	//Scratch work
	//var promise = APromise.race();
	//return promise;
};

APromise.resolve = function(value){
	return Promise.resolve(value);
};

APromise.reject = function(err){
	return Promise.reject(err);
};

module.exports.APromise = APromise;
