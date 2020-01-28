/**
 * Students are asked to stand in non decreasing order of height. So from smallest to largest. Return the minimum number of students not standing in the right position. 
 * @param {number[]} heights is a list of the student heights.
 * @return {number} returns the number of students that are out of order.
 * For a thing to be in the correct position, it must have everything to the right of it be greater than or equal to the current value. It must also have everything to the left of it be in less than or equal to it.
 */
const heightChecker = function(heights) {
	let numWrong = 0;
	let wrongPosition = false;
	// Loop through each height value in the array, then check the left and right sides.
	heights.forEach(function(height, index) {
		// Now need to check every value.
		for (let i = 0; i < heights.length; i++) {
			// If left side of the current height, then check that the value is less than or equal to.
			if (i < index) {
				if (heights[i] > height) wrongPosition = true;
			}

			// Does not handle the index equal case.

			if (i > index) {
				if (heights[i] < height) wrongPosition = true;
			}
		}

		if (wrongPosition) numWrong += 1;
	});

	return numWrong;
};

// Implementation is wrong because we count the wrong ones after order. One possible solution is using a queue copy of the heights and if it passes, then keep, otherwise you need to remove it from that array. Or you just build it from scratch.

const heightChecker = function(heights) {
	let numWrong = 0;
	let wrongPosition = false;
	let heightsArray = [];
	// Loop through each height value in the array, then check the left and right sides.
	heights.forEach(function(height, index) {
		// Now need to check every value.
		for (let i = 0; i < heights.length; i++) {
			// If left side of the current height, then check that the value is less than or equal to.
			if (i < index) {
				if (heights[i] > height) wrongPosition = true;
			}

			// Does not handle the index equal case.

			if (i > index) {
				if (heights[i] < height) wrongPosition = true;
			}
		}

		if (!wrongPosition) {
			heightsArray.push(height);
		}

		wrongPosition = false;
	});

	return heightsArray.length - heights.length;
};

// You still don't change the array that you reference, but if you do, then you need to change the pointers, or not move them at all.

// Discussion Solution. All you need to do is sort the heights in the right order, then compare them to see which ones don't match.
const heightChecker = function(heights) {
	let copy = [ ...heights ].sort((a, b) => a - b);
	let count = 0;

	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== copy[i]) count += 1;
	}

	return count;
};
