// Code Wars
// @param {number[]) arr is an array of numbers that we want to edit.
// @param {number} n is the maximum amount of occurances that we want from a number.
// @return {number[]} is the array of numbers that remove excessive repeats defined by n.

function deleteNth(arr, n) {
	// Any edge cases we haven't considered? Empty array? Negative n?
	// We have an empty array it shouldn't really matter because we iterate through it and do nothing.
	// If we have a negative n then we actually do need to check it because the undefined step automatically pushes the value.
	// If n is exactly 0, we still need to change it.

	console.log(`we have an array of ${arr} and a limit of ${n}`);

	// One way we could do this is by having a storage object and keep track of the count.
	// If the count defined is greater than n, filter it out of the array.

	// Populating the count object.
	const numCount = new Object();

	// I can't do a pure filter because I need to constantly update the count object.
	// So we have a separate storage array for actual return value, no definite size...
	const returnArr = new Array();

	for (let number of arr) {
		// number defines each number in the array
		console.log(number);
		if (numCount[number] === undefined && n > 0) {
			numCount[number] = 1;
			returnArr.push(number);
		} else if (numCount[number] < n) {
			// Actually do have to separate the concerns because the count change is not always 1.
			numCount[number] += 1;
			returnArr.push(number);
		} else {
			// Otherwise, we know the numCount is already n or more so we just update the count.
			numCount[number] += 1;
		}
	}
	// Now we have a count object that displays everything. Can I console log this?
	// Remember that the key is a string and the value is a number. We don't have to typecast.
	console.log(numCount);

	// Outputing the return array.
	console.log(returnArr);

	return returnArr;
}

// Here is another one that is much cleaner, here you can see that it's basically the same thing but it uses a filter method like I thought. So pretty much the same thing but executed much cleaner.
function deleteNth(arr, x) {
	var cache = {};
	return arr.filter(function(n) {
		cache[n] = (cache[n] || 0) + 1;
		return cache[n] <= x;
	});
}
