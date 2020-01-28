// CodeWars
// @param {number} sq is the number that we have to test if it is a perfect square.
// @return {number} is -1 if the number is not a perfect square, otherwise, we return the next perfect square.
function findNextSquare(sq) {
	// Return the next square if sq if a perfect square, -1 otherwise
	// So go throught and check if the the value is a perfect square first.
	if (Math.sqrt(sq) === Math.floor(Math.sqrt(sq))) {
		console.log(`${Math.sqrt(sq)} compares to ${Math.floor(Math.sqrt(sq))}`);

		// If this does work, then we need to get the value of Math.sqrt(sq) and add 1 to it, then square it.
		return Math.pow(Math.sqrt(sq) + 1, 2);
	}

	return -1;
}

// Here are outside solutions. This is actually what I was looking for. The modulus but I didn't know how to use that as a comparator.
function findNextSquare(sq) {
	var root = Math.sqrt(sq);
	return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
