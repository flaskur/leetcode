/**
 * Finding the count of the string that is found in a larger string.
 */

// Naive approach.
const naiveSearch = function(long, short) {
  let count = 0;
  
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count += 1;
    }

  }

  return count;
};

// Notice that it overlaps because we don't move the i pointer index.
console.log(naiveSearch('catapultpuldpuloooo', 'oo'));
