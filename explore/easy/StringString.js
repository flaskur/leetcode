/**
 * Return the index of the first occurrence of teh needle in the haystack, or -1 if not in the haystack.
 * These are strings... If haystack is "hello" and needle is "ll" then return 2 for index.
 * On empty string, return 0. Case insensitive?
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
	// Edge case of empty needle.
	if (needle.length === 0) return 0;

	// Check if the needle even exists in the haystack using regex.
	let re = new RegExp(needle, 'g');

	let result = haystack.search(re);

	console.log(result);

	return result;
};

// Somewhat unfair since I used a regex function that literally does the operation, but it works. If you were to do this without, then use an iteration step to check if the string is included. Basically you iterate until you find the first character. Use a empty string and populate it. Use an index pointer. On failure you should reset the string and index pointer but keep iterating since it might be in the later portion of the string.
// let temp = '';
// let j = 0;
// for (let i = 0; i < haystack.length; i++) {
//   if (haystack[i] === needle[j]) temp += haystack[i];
//   else {
//     temp = '';
//     j = 0;
//   }

//   if (temp === needle) return true;
// }

// return false;

// Or just convert to array and use includes().
