// given a string time hh:mm where some digits are hidden as ?, return the latest valid time possible by replacing the hidden digits.
// first place can be 0-2 but if it's 2, then the second place can only be 0-4
// second place can be 0-9 unless first place is 2, then it can only be 0-3
// third place can be 0-5
// fourth place can be 0-9
// i think it would be best to work in reverse, fourth place if ? will be set to 9, third place if ? will be set to 5, second place if ? must check first place to see if its 2 or not. if it is 2, then set to 3, if it is not 2, then set to 9. if the first place is ? then you must check the second place to see if its greater than 3 or not, if not, set to 2. if both first and second place are ??, then set to 23.
// alright so maybe working in normal order would be fine as well.

function maximumTime(time: string): string {
	let maxTime = [
		...time,
	];
	// console.log(maxTime);

	// edge case ??
	if (maxTime[0] === '?' && maxTime[1] === '?') {
		maxTime[0] = '2';
		maxTime[1] = '3';
	}

	// figure out first place
	if (maxTime[0] === '?') {
		// check what value second place is
		let secondVal = parseInt(maxTime[1]);
		if (secondVal > 3) {
			maxTime[0] = '1';
		} else {
			maxTime[0] = '2';
		}
	}

	// figure out second place
	if (maxTime[1] === '?') {
		let firstVal = parseInt(maxTime[0]);
		if (firstVal > 1) {
			maxTime[1] = '3';
		} else {
			maxTime[1] = '9';
		}
	}

	if (maxTime[3] === '?') {
		maxTime[3] = '5';
	}

	if (maxTime[4] === '?') {
		maxTime[4] = '9';
	}

	return maxTime.join('');
}
