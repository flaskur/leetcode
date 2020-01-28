/**
 * This function takes an array of integers and checks if the average of any two pairs is equal to the given target average. It returns a boolean based on that answer.
 * @param {number[]} pairArray is a list of integers to check for average.
 * @param {number} targetAvg the number that we want to compare with each pair.
 * @return {boolean} true or false depending on whether or not the target average is found inside of the pairArray. 
 */
const averagePair = function(pairArray, targetAvg) {
  let i = 0;
  let j = pairArray.length - 1;

  while (i < j) {
    let pairAvg = (pairArray[i] + pairArray[j]) / 2;

    if (pairAvg === targetAvg) return true;

    // Otherwise we check which pointer to move...
    if (pairAvg < targetAvg) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  // No pair found equal to target average.
  return false;
};

// Official Solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}