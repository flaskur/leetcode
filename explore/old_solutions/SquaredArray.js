/**
 * Given two arrays, we want to return true or false. True if all the elements in the second array are squared of the first array. Frequency must be the same.
 */

// Naive Approach - Brute force method is O(n^2) because it uses indexOf inside of a for loop.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // This part right here is bad because you use indexOf which means you need to iterate through the whole array again. Also you don't need to do this on every iteration.
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Refactored - Uses objects instead of arrays and loop through the arrays separately. This is better because you only need to compare counts.
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  // Populating the objects with a count value. We check either the existing count in the object, but if it doesn't exist yet, we assume 1. In each case we add 1 to increase the count.
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  console.log(freqCounter1);
  console.log(freqCounter2);

  for(let key in freqCounter1) {
    // The squared key value doesn't even exist in the second object.
    if (!(key ** 2 in freqCounter2)) return false;
    
    // If the count values don't match after comparing the frequency objects.
    if (freqCounter1[key] !== freqCounter2[key ** 2]) return false;
  }

  return true;
}

console.log(same2([1,2,1], [1,4,4]));