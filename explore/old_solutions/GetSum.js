/**
 * Calculate the sum of two integers a and b but you are not allowed to use the + or - operator. 
 * This is probably a problem where you are suppose to use the bitwise operations.
 * @param {number} a
 * @param {number} b
 * @return {number} is the sum of a and b. 
 */
const getSum = function(a, b) {
	// So first we need to consider the bit places where the carry would happen.
	let carry = a & b;
	let result = a ^ b;
	let shiftedCarry;

	while (carry !== 0) {
		shiftedCarry = carry << 1;

		// Notice that carry fails when the bit are not both 1, which makes sense.
		carry = result & shiftedCarry;

		// Result bitwise is exactly what you would expect using a xor operation, but have to keep doing that until the carries are all gone, hence the while loop.
		result = result ^ shiftedCarry;
	}

	return result;
};

// Think about this logically. If you were going to add, you simply check the bits in which they are both one. Those are the cases where they are 1 and 1 which turns to 0.
// Result is what you would actually get if you don't consider the carry.
// The loop is where I get lost. So basically which each loop it moves the carry to the left because of course it carries over. Then you & it. You use & for some reason.
// If the place is already at 1 and you add the carry it should go to 0 which is xor.
// My mistake, that was just the update for carry. & is here because the next carry will only happen if they are both 1. In which case you still need to shift it. That makes sense. Carry actually becomes 0 when no other places are 1. That actually makes sense.

/**
 * Sum using bitwise operations. You need a carry bit.
 * xors the current place, ands the carry. Next spot should be 
 */
const getSum = function(a, b) {
	let carry;

	while (b) {
		carry = a & b;
		a ^= b;
		b = carry << 1;
	}
};
