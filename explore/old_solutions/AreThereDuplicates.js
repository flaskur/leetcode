/**
 * Need to check if a given number of arguments have any duplicates. This can be done in the brute force way by doing a double for loop on the arguments array.
 * Instead use the same frequency counter schema and check if any of the counts are 2.
 */

const areThereDuplicates = function(...args) {
	let duplicateObject = {};

	for (let arg of args) {
		if (duplicateObject[arg] === true) {
			return false;
		} else duplicateObject[arg] = true;
	}

	return true;
};

// Alternative which kind of cheats because it uses the built in set data structure.

const areThereDuplicates = function(...args) {
	if (args.length < 2) return false;

	return args.length !== new Set(args).size;
};

// Official Solution

function areThereDuplicates() {
	let collection = {};
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}
	for (let key in collection) {
		if (collection[key] > 1) return true;
	}
	return false;
}
