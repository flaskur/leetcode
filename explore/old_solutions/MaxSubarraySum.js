/**
 * Finding the largest sum given a number of specified elements.
 */

// Naive Solution
const maxSubarraySum = function(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}


// Using a sliding window that avoid excessive arithmetic and resumming everything...
const maxSubarraySum = function(arr, sum) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  // The idea here is to start off by taking the first n digits and making that max. Then start the new index at digit index. From there since you know you will always use the same amount of digits, you can just shift the window.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Start off as maxSum so that we can use arithmetic and find sum after edge arithmetic.
  tempSum = maxSum;

  // The logic is subtracting the value at start index and adding value at new window frame. Essentially 'shifting' the frame.
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - (arr[i - num]) + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};


// I think I'm redoing it.
const maxSubarraySum = function(arr, len) {
  // The logic for this is to start off by just taking the first len sum and then moving the ends and comparing to other cases.

  if (len > arr.length) return null;
  
  let maxSum = -Infinity;
  let tempSum = 0;
  
  for (let i = 0; i < len; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  let startPointer = 0;
  let endPointer = len;

  while (endPointer < arr.length) {
    tempSum = tempSum - arr[startPointer] + arr[endPointer];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    startPointer += 1;
    endPointer += 1;
  }

  return maxSum;
};