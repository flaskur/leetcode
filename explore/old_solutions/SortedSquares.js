/**
 * Given an array of integers called A sorted in non decreasing order, meaning it is either increasing or not changing at all.
 * This is basically the same as the sort function.
 * We want to return the array of the squares, but then sort it in ascending order. 
 * Basically we need to square the elements and then sort.
 * 
 * Are there any edge cases that we need to consider? We will always get an array and it will always have at least one element. The array length will be at most 10000 elements.
 * Really only needs a mapping function and a sort function.
 */


const sortedSquares = (A) => {
  A = A.map(element => {
    return (element ** 2);
  });

  // Array is now squared, but not sorted. It handles the sign case. 

  A = A.sort((a, b) => {
    return (a - b);
  });

  return A;
};