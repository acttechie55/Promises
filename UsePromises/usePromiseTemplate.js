function mapAsync(iterator, obj, context) {
	var arr = [];
	var n = obj.length;
	for (var index = 0; index < n; index++) {
		var collect = iterator.call(context, obj[index], index, obj);
		arr.push(collect);
	}
	return Promise.all(arr);
};
function mapAsyncWithOrder(iterator, array, context, descending) {
	//create a promise. We are saying that when it resolves, it resolves with an empty array
	var initialValue = Promise.resolve([]);
	if(!Array.isArray(array)) {
		return initialValue;
	}
	iterator = iterator.bind(context);
	var inOrder = function(prevValue, nextValue, nextIndex, array) {
		return prevValue.then(function(items) {  
			return iterator(nextValue, nextIndex, array).then(function(moreItems) {
			return items.concat(moreItems);
		});
	});
};
function mapAsyncInOrder(iterator, array, context) {
	var arr = [];
	var n = array.length;
	for (var index = 0; index < n; index++) {
		var collect = iterator.call(context, array[index], index, array);
		arr.push(collect);
	}
	return Promise.all(arr);
};
function mapAsyncInDescendingOrder(iterator, array, context) {
	var arr = [].reduceRight;
	var n = array.length;
	for (var index = 0; index < n; index++) {
		var collect = iterator.call(context, array[index], index, array);
		arr.push(collect);
	}
	return Promise.all(arr);
};

//var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
//    return a.concat(b);
//}, []);
// flattened is [4, 5, 2, 3, 0, 1]