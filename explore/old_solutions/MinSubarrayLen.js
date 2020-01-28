/**
 * This function accepts two parameters - an array of positive integers and a positive integer.
 * It should return the minimal length of a contiguous subarray which the sum is greater than or equal to the integer passed. If none, return 0.
 * Problem with that is sliding window is generally for constant length. Here we are trying to find it.
 * @param {number[]} numArr is an array of positive integers
 * @param {number} target the contiguous subarray should have a sum that is greater than or equal to this target. 
 * I'd imagine that we would need a variable for current value and overwrite it. 
 * Maybe you could start at each index and keep adding elements until it works, then store the length of that. But that is O(n^2) and the trivial solution.
 */


// Official Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
      total -= nums[start];
      start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

const minSubArrayLen = function(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end += 1;
    } else if (total >= sum) {
      // It is end - start because you already incremented end on the other loop.
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start += 1;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;

}