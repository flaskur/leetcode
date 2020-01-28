/**
 * Given an array of strings, group the anagrams together. Remember that to be an anagram means that they have the same characters but can be in a different order. This naturally makes me think a hash table with character count is appropriate here.
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
	let result = [];
	if (strs.length === 0) return result;

	let clone = [ ...strs ];
	// console.log(`clone is ${clone}`);

	let currentPattern = [];
	// The goal here is to take the hash of the first string and find all other strings that match the hash we set.
	while (clone.length > 0) {
		let currentHash = {};
		let start = [ ...clone[0] ];
		start.forEach((char) => {
			if (currentHash[char] === undefined) {
				currentHash[char] = 1;
			} else currentHash[char] += 1;
		});
		currentPattern.push(clone[0]);
		clone.shift();

		// console.log(`The pattern we are checking is...`);
		// for (let key in currentHash) {
		// 	console.log(`key ${key}, count ${currentHash[key]}`);
		// }

		for (let i = clone.length - 1; i >= 0; i--) {
			let flag = true;
			// We need pattern here because we plan on mutating the value of pattern.
			let pattern = { ...currentHash };
			for (let j = 0; j < clone[i].length; j++) {
				if (pattern[clone[i][j]] <= 0 || pattern[clone[i][j]] === undefined) {
					// The string does not satisfy the current hash, set flag to false and break.
					// console.log(`Fail ${clone[i]}`);
					flag = false;
					break;
				} else {
					pattern[clone[i][j]] -= 1;
				}
			}

			// It will only be an anagram if all the character values are equal to 0.
			for (let key in pattern) {
				if (pattern[key] !== 0) {
					// console.log('Not Zero Char Pattern');
					flag = false;
					break;
				}
			}

			if (flag) {
				// console.log(`string ${clone[i]} satisfy anagram`);
				currentPattern.push(clone[i]);
				// Remove the string from the clone array.
				clone.splice(i, 1);
			}
			// else {
			// 	console.log(`string ${clone[i]} fails anagram`);
			// }
		}

		// We have gone through all the strings and the current pattern should hold the arr of strings that satisfy this pattern. Clone should also be mutated.

		// console.log(`pushing ${currentPattern}`);
		result.push(currentPattern);
		currentPattern = [];
	}

	return result;
};
// Time complexity issue for really large output. My brute force solution doesn't work for that because it has to iterate through the entire array each time. Even with removing the particular string, it's still not good enough.
// The problem right now is that I have to do O(n^2) because I need to check each character in the string to see if it exists in a hash map. Can I get by with iterating through only once?

// The given solution uses a hash map. The key for the map is the sorted version of the string. Meaning we could just do comparison by sorting each string before hand populating the property with that sorted key. I thought of this initially but I thought it would be bad since the sorting operation is a costly O(nlogn). Okay, that makes a bit more sense, let's try this next attempt.
const groupAnagrams = function(strs) {
	// This hash should use the sorted string as the key, and the value should be an empty array that is populated each time.
	let hash = {};

	for (let str of strs) {
		// Hash doesn't have this sorted string instance. Speaking of which, does the sort function work for strings? The concept is the same but I need to know whether or not I need to convert to an array first.
		// This doesn't sort properly for some reason.
		let sortedStr = [ ...str ];
		// console.log(`Char array is ${sortedStr}`);
		// Please keep in mind that the array is now an array of random characters.
		sortedStr.sort((a, b) => {
			if (a < b) return -1;
			if (b < a) return 1;
			return 0;
		});
		// The join doesn't mutate, you need to assign.
		sortedStr = sortedStr.join('');
		// console.log(`The sorted string is ${sortedStr}`);
		if (hash[sortedStr] === undefined) {
			// The pattern is empty, populate it with an empty array pushed with the current string instance.
			hash[sortedStr] = [ str ];
		} else hash[sortedStr].push(str);
	}

	// I expect a complete hash with sorted string as the key and value as an array of all the anagrams for that pattern.
	let result = [];
	for (let key in hash) {
		result.push(hash[key]);
	}

	return result;
};

// Okay, so this solution does work. The brute force method was overthinking it a lot. The sorted idea did occur to me, but I thought would be bad for complexity purposes. So to summarize, this solution works by using a hash that has the key as a sorted string and the value as an array of all the strings. Then you iterate through the hash to populate and return the result.
