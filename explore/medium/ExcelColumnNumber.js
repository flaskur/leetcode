/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number
 * A is 1, AB is 28 because in order it goes to Z then ZA which is 27. ZY is 701 which I think is because Y goes to 25 and Z in the second place is 26 * 26. Right, so this problem is basically addition, but the placeholders are different. If I think about this, what is AAA? Or rather, what is the value of the A in the 3rd place? If I think about it in decimal notation, the 3rd place should be 26^2 right?
 * My theory is that the placehold values are from right to left 26^0 * n0 + 26^1 * n1 + 26^2 * n2 + ... and so on. One problem that I might run into is that the integer limit might be passed at 2^52 in JS. Try it first though.
 * 
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
	let sum = 0;

	let arr = s.split('').map((digit) => Math.abs(digit.toUpperCase().charCodeAt(0) - 64));

	console.log(arr);

	// loop in reverse order, but you need hash map values for the alphabet. I can use the charcode instead.
	let power = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		sum += arr[i] * Math.pow(26, power);
		power += 1;
	}

	return sum;
};

// That worked, though there was weird behavior when you insert a number instead of a character.
