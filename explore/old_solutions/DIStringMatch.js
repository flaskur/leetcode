/**
 * We are given a string with only D or I which is essentially decrease or increase.
 * We can determine the amount of loops and the boundary based off the size of the string.
 * In one case where we have a string of 4 characters, we can expect an output of 5 elements in an array with values from 0 to 4. In that case, we basically bound it based on the string about such that the values in the array are 0 to String.length.
 * One idea is to keep a variable for upper and lower bound count and increment or decrement based on that. If those bounds are the same number then we know to stop at that point.
 * 
 * Also in the scenario where the string is only one character, how do we handle that?
 * Actually in that case lower bound always starts at 0 and upper bound starts at 1. So maybe in the general case, we can say that upper bound will be string.length.
 * 
 * So base case should be when the upper and lower bounds are the same value.
 */

const diStringMatch = function(S) {
  let lowerBound = 0;
  let upperBound = S.length;
  let permArray = new Array();

  // Base case should occur whent he lowerBound === upperBound.
  // We need to iterate based off the string, so it might be beneficial to turn it into an array. 

  for (let character of S) {
    if (character === 'I') {
      permArray.push(lowerBound);
      lowerBound += 1;
    } else if (character === 'D') {
      permArray.push(upperBound);
      upperBound -= 1;
    }
  }

  // After the loop I should expect the upperbound to equal the lowerbound, but that value has not yet been pushed to the permArray.
  if (lowerBound === upperBound) {
    permArray.push(lowerBound);
  }

  console.log(permArray);
  return permArray;
};

// Good job, you got that one. Though it was fortunate that there was a distinct pattern. You could have used a while loop to stop when the lowerBound and upperBound equal each other but you would still need to iterate through the string characters.

// Also note that if you were going to convert the string into an array of characters, the most elegant method is to destructure like [...string].

// Other solutions follow the same logic.
