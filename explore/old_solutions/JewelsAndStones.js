// We are given two input strings called J and S.
// I would turn J, the string for jewels into an array. Actually I should do that to both. The plan is to traverse through the S array and check each element.
// Keep a counter for number of times element is included in J array, though I'm not sure what method that is. If you can't use an include method, we could just use booleans and for loop. Flag if found and break. Keep going until finished.

// This works. Uses the split, forEach, and includes methods. Basically converting to an array makes it much easier to complete.
let numJewelsInStones = function(J, S) {
  let jewelsArray = J.split(''); // Split by character?
  let stonesArray = S.split(''); 

  let counter = 0;
  
  stonesArray.forEach(function(stone) {
    if (jewelsArray.includes(stone)) counter += 1;
  });

  return counter;
}