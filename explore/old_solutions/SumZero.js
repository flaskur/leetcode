/**
 * Given an ordered array of integers, we want to return the first pair of integers that sum to 0. Don't count the element itself twice. Return undefined if not found.
 */


// Brute force method using double for loops and indices...
// Not good because complexity is O(n^2).
const sumZero = function(sortedArray) {
  if (sortedArray.length < 2) return undefined;
  
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[i] + sortedArray[j] === 0) {
        return new Array(sortedArray[i], sortedArray[j]);
      }
    }
  }

  return undefined;
};

// Try summing with pointers at the front and the end because of nature of summation and sorted array.
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  // So we use a while loop instead because we don't know the exact number of iterations. 
  while (left < right) {
    // Redeclaration with let is allowed? If not you can just declare it above with null value.
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return undefined;
}