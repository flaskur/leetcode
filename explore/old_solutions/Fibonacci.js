/**
 * Recursive function that accepts a number and returns the nth number in the fibonacci sequence. The fibonacci sequence is 1 1 and every number after is the sum of the previous ones.
 * @param {number} pos is the position order of the number we want to find in the sequence.
 * @return {number} is the actual number in the fibonacci sequence at that position.
 */
const fib = function(pos) {
  if (pos === 0) return null;
  
  if (pos === 1 || pos === 2) return 1;

  return fib(pos - 1) + fib(pos - 2);
};

console.log(fib(35));