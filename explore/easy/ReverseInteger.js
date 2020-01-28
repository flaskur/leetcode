/**
 * Given a 32 bit signed integer, reverse the digits of the integer.
 * 
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
	let neg = false;
	if (x === 0) return 0;
	if (x < 0) neg = true;

	let reverseArray = Math.abs(x).toString().split('').reverse();
	while (reverseArray[0] === '0') {
		reverseArray.shift();
	}

	console.log(reverseArray);
	console.log(reverseArray.join(''));

	// Guaranteed overflow.
	if (reverseArray.length > 10) return 0;

	if (reverseArray.length === 10) {
		let signedMax = Math.pow(2, 31) - 1;
		signedMax = signedMax.toString().split('');
		console.log(signedMax);

		for (let i = 0; i < 10; i++) {
			// Overflow occurs if the particular digit is over the signed max.
			// Keep in mind that reverse array contains them as characters not integers so you have to convert before comparison.
			if (Number(reverseArray[i]) > signedMax[i]) {
				console.log(`${reverseArray[i]} is greater than ${signedMax[i]}`);
				return 0;
			} else if (Number(reverseArray[i]) < signedMax[i]) break;
		}
	}

	if (!neg) {
		console.log('Not a negative just return the number');
		return Number(reverseArray.join(''));
	} else {
		console.log('Negative, unshift a minus');
		return -1 * Number(reverseArray.join(''));
	}
};

// I didn't check for overflow which is 2147483647. We got 9646324351.
// The problem here is that I can't just use a greater than check because I cannot represent that number. I could do a length check on the array and fail it if it's 11 or more, but that doesn't handle 10 digit but over 2147..... Only check the first digit handles most of them but it's definitely not complete. Maybe I can split it on cases where length is 10 or more?
// You need a way to detect if it's greater than 2^31 - 1 without any integer comparison. I could do an index comparison until a digit is greater than it.
