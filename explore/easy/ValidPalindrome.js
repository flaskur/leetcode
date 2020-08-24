/**
 * Given a string, determine if it's a palindrome only considering alphanum and ignore cases.
 * The first thing you should do is remove all the non alphanum character in the string or make a new string and populate that with that. Spaces don't count.
 * Reverse the string and then check by value.
 * You could use regex! Haven't used that in ages.
 * 
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
	// if (s.trim().length === 0) return true;
	if (s.match(/[a-z0-9]/gi) === null || s.match(/[a-z0-9]/gi).length === 0) return true;
	// Remove the non alphanum characters.
	let alphanumString = s.match(/[a-z0-9]/gi).join('').toLowerCase().split('');
	console.log(alphanumString);

	return alphanumString.join('') === alphanumString.reverse().join('');
};
