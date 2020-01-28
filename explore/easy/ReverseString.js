/**
 * Reverse a string consider that it is given as an array of characters. Do no allocate more memory, must be in place.
 * 
 * @param {character[]} s
 * @return {void} Modify in place.
 */
const reverseString = function(s) {
	// middle holds the stopping index of swaps.
	let middle = Math.ceil((s.length - 1) / 2);

	for (let i = 0; i < middle; i++) {
		let j = s.length - 1 - i;
		[ s[i], s[j] ] = [ s[j], s[i] ];
	}
};
