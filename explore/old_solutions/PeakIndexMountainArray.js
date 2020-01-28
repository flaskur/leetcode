/**
 * An array is a mountain if the length is at least 3 or more and these exists i such that 0 < i < array.length - 1. So i cannot be the last index?
 * Basically A[i] must be greater than everything before but less than everything after. 
 * Similar to a summit index problem in my DSA class.
 * Given an array that is definitely a mountain array, return the any index such that it is the summit value.
 * Example -> [0,2,1,0] returns 1 because 2 is the summit and the index for that is 1.
 * One possible solution is iterating through the array and keeping the max.
 * Or you could use a while loop until the next iteration is not greater. Since we know that summit is the greatest, we can just find the largest number in the array and return the index of that.
 * If you were to handle edge cases you should do if statement to check that the array is atleast size 3 and less than 10000. Some other stuff too. No validation required I guess.
 */
const peakIndexInMountainArray = function(A) {
  console.log(A);
  // Find the max number in the array.
  let maxNumber = A[0];

  // This is not efficient because it will iterate through the whole thing instead on only half the array.
  // A.forEach(function(number) {
  //   if (number > maxNumber) maxNumber = number;
  // });

  let i = 0;
  while (A[i] >= maxNumber && i < A.length) {
    maxNumber = A[i];
    i += 1;
  }

  return A.indexOf(maxNumber);
};

// Logic is really easy. Small bug where I used a bad conditional for the first value so it didn't iterate. The nature of the summit array makes it so that we only need to find the largest value and get the index of that in the original array.
// Using a typical forEach is not optimal because we don't want to go through the all whole array and a while loop is good because we don't know the exact number of iterations.

// Super easy implementation. Uses the Math.max function and takes the arguments of the array using the spread operator. Should have done that fron the start.
// Should note that accepted answer might be off because of repeated numbers.

// var peakIndexInMountainArray = function(A) {
//   return A.indexOf(Math.max(...A));
// };
