// Given an argument as a string, return an array of items without any elements witht he same value that were next to each other. Preserve the original order of elements.
// @param {string, array} iterable is a string or array that we want to manipulate
// @return {string[]} is an array of iterable strings without the adjacent duplicates.
// Notice that casing does matter for this problem.
var uniqueInOrder = function(iterable) {
	// Okay so we can have either a string or an array but I don't think that matters if we are looping over it.
	const storage = new Array();

	if (iterable.length === 0) return storage;

	// The idea here is to check the next index and only if it is not equal to the current, then we can add it to storage.
	// However there may be an edge case for the last one because it will be compared to undefined which is no good.

	// One plan instead is just to push the index values on. But that probably defeats the purpose.
	// If current index value !== index + 1 value, then push the current index.
	// Might need to handle edge case of last number.
	// Okay so using this schema, no matter what, the last number will be accepted, which is fine if the second last number is the same, it will not be counted.

	for (let i = 0; i < iterable.length; i++) {
		if (iterable[i] !== iterable[i + 1]) {
			storage.push(iterable[i]);
		}
	}

	console.log(storage);
	return storage;
};

// Here is an alternative method instead of just doing the last occurance.
// Only big question here is why doesn't the push value evaluate to a boolean?
// This schema is better though because instead of considering the current array, we think about the entries that were already stored. So it is starting logic instead of ending logic.

function uniqueInOrder(it) {
	var result = [];
	var last;

	for (var i = 0; i < it.length; i++) {
		if (it[i] !== last) {
			result.push((last = it[i]));
		}
	}

	return result;
}

// Here's a clean one. Basically just checking that the current element is not the same as the last element.
var uniqueInOrder = function(iterable) {
	return [ ...iterable ].filter((a, i) => a !== iterable[i - 1]);
};
