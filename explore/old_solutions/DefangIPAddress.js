/**
 * Given a valid IP address, return a defanged version of the address. The means replace every period with a '[.]'. I would use a regex replace method global pattern on periods. The brute force method would be to use a for loop and an empty new string. Populate the empty new string by going through each character.
 */
const defangIPaddr = function(address) {
	let regexPattern = /[.]/g;

	// The replace method does not mutate the original string.
	return address.replace(regexPattern, '[.]');
};
