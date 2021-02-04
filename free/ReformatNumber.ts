// seems pretty straightforward. just remove all spaces and dashes with a regex, then use a while loop to check length of remaining str. if length is greater than 4 then each iteration should populate an array that slices 3 characters of the phone number. after the while loop, check the digit count and modify accordingly. use a join statement with dashes and return formatted string.
function reformatNumber(number: string): string {
	let num = number.replace(/[\s-]/g, '');
	// console.log(num);

	let digits: string[] = [];

	while (num.length > 4) {
		digits.push(num.slice(0, 3));
		num = num.slice(3);
	}

	if (num.length === 4) {
		digits.push(num.slice(0, 2));
		digits.push(num.slice(2, 4));
	} else {
		digits.push(num);
	}

	return digits.join('-');
}
