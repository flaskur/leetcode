/**
 * Can't focus so I'm just gonna do some easy logic LeetCode. Hopefully this one doesn't fuck me over too hard.
 * 
 * The input is an array of arrays. In our case it is an array wrapping 3 inside arrays each with 3 elements. This is what you would call a matrix.
 * 
 * It looks like you first reverse each array, then invert their values.
 * 
 * I think array has a reverse function. I can look through the array elements to invert.
 */


let flipAndInvertImage = function(A) {
  let returnArray = new Array();
  A.forEach(innerArray => {
    let tempArray = innerArray.reverse();
    
    console.log(`tempArray is ${tempArray}!`);
    
    tempArray.forEach((number, index) => {
      // If the number element is 1
      if (number) {
        tempArray[index] = 0;
      } else {
        tempArray[index] = 1;
      }
    });

    console.log(`tempArray is now ${tempArray}!!!`);
    
    returnArray.push(tempArray);
  });

  return returnArray;
};

// Good it works, but again the complexity is really high. It is faster than 17.35% of submissions. No good.

// Here is a different implementation. It looks like he used a fill method and mapped to create a return array. So basically he is creating the structure, but not putting in the correct values in the same step. He then uses a double for loop to assign values in the tradition way with double indices. Probably the same time complexity wise, though I think regular for loops are better than forEach loops.

// var flipAndInvertImage = module.exports = function(A) {
//   let N = A.length;
//   let returnArray = Array(N).fill(0).map(() => Array(N).fill("0"));    

//   for (let i = 0; i < N; i++) 
//       for (let j = 0; j < N; j++)         
//           returnArray[i][j] = A[i][N - 1 - j] == 0 ? 1 : 0; 

//   return returnArray;

// };