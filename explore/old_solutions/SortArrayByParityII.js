/**
 * Given an array of nonnegative integers, half of the integers are odd and the other half are even.
 * Sort the array so that whenever the element A[i] is odd, i is also odd. Likewise for even.
 * As long as the condition is satisfied, any array is acceptable.
 * One way of doing this is by extrapolating into two arrays, then combine them together. That is brute force but it's still worth doing.
 * @param {number[]} A is the array given which has half even and odd numbers.
 * @return {number[]} is the returned array which alternates even and odd.
 */
const sortArrayByParityII = function(A) {
	let evens = new Array();
	let odds = new Array();
	let returnArray = new Array();

	A.forEach((element) => {
		element % 2 === 0 ? evens.push(element) : odds.push(element);
	});

	console.log(evens);
	console.log(odds);

	for (let i = 0; i < evens.length; i++) {
		returnArray.push(evens[i]);
		returnArray.push(odds[i]);
	}

	console.log(returnArray);

	return returnArray;
};
// Brute force method works, but there should definitely be a more elegant solution.

// Here is a good way to do it by keeping track of a even and odd counter. Definitely uses less memory than the above one.
const sortArrayByParityII = function(A) {
	let even = 0,
		odd = 1;

	// Declaring the return array with set size.
	let returnArray = new Array(A.length);

	for (let i = 0; i < A.length; i++) {
		// If the number is even, then push into that position.
		if (A[i] % 2 === 0) {
			returnArray[even] = A[i];
			even += 2;
		} else {
			returnArray[odd] = A[i];
			odd += 2;
		}
	}

	return returnArray;
};
