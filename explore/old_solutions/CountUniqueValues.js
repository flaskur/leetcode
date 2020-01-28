/**
 * Given a sorted array, fidn the number of unique values inside. There can be negatives but you will always be given a sorted array of integers.
 */

// Attempt using objects.
// Works but defeats the purpose. Suppose to use pointers. If you use two pointers that start at the left you could use the second pointer to find the next value and set the first point equal to it. However, the act of finding the next unique value is O(n) which isn't good.
const countUniqueValues = function(sortedArray) {
  let uniqueObject = new Object();

  if (sortedArray.length === 0) return 0;
  if (sortedArray.length === 1) return 1;

  sortedArray.forEach(number => {
    if (uniqueObject[number] === undefined) {
      uniqueObject[number] = true;
    } 
  });

  return Object.keys(uniqueObject).length;
};

console.log(countUniqueValues([1,1,1,1,3,6,6,7]));

// Alternative... Crazy mutation in the front of the array. Uses sameness factor.
// Not a fan because it's complicated for no reason. The two pointers progress based on whether or not the pointer values are the same. 

const countUniqueValues = function(sortedArray) {
  let i = 0;
  for (let j = 1; j < sortedArray.length; j++) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
    // You don't need to increment j because it's automatically done by the for loop.
  }

  return i + 1;
};
