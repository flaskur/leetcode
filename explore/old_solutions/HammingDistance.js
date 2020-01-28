/**
 * Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * We are given two integers and we need to find the hamming distance. 
 * So basically convert the integers into binary and loop through them to check the number of differences.
 * Any edge cases?
 * Well the big problem here is that you need to make them the same amount of bits. Or at least edit it afterwards to check for issues. 
 * We are assuming that the integers are 0 or more so we don't have to deal with negative numbers.
 * The question is how do we convert from a base 10 to binary using regular code? Recursion?
 */


const hammingDistance = function(x, y) {
  let xStorage = new Array();
  let yStorage = new Array();

  const findBinaryX = function(value) {
    if (value > 0) {
      xStorage.unshift(value % 2);
      value = Math.floor(value / 2);
      findBinaryX(value);
    } else return xStorage;
  };

  const findBinaryY = function(value) {
    if (value > 0) {
      yStorage.unshift(value % 2);
      value = Math.floor(value / 2);
      findBinaryY(value);
    } else return yStorage;
  };
    
  findBinaryX(x);
  findBinaryY(y);
    
  console.log('without change', xStorage);
  console.log('without change', yStorage);

  // Now we have arrays for all the bits in correct format. Now we have to loop through the arrays and check differences, but there is still the problem of length. 

  if (xStorage.length < yStorage.length) {
    while (xStorage.length < yStorage.length) {
      xStorage.unshift(0);
    }
  } else if (yStorage.length < xStorage.length) {
    while (yStorage.length < xStorage.length) {
      yStorage.unshift(0);
    }
  }
    
    console.log('after change', xStorage);
    console.log('after change', yStorage);

  // Now they have the same number of bits.
  let differenceCount = 0;

  xStorage.forEach((bit, index) => {
    if (bit !== yStorage[index]) {
      differenceCount += 1;
    }
  });

  return differenceCount;
};

// Think about it. Example of 7. 7 divided by 2 is 3.5 which is 3 with a remainder of 1. We care about the remainders so obviously we use a flooring function and push the remainder to an array. We stop when the value is 0.

// let storage = new Array();
// const findBinary = function(value) {
  
//   // Value is the integer given and needs to be divided by two until the base case of value less than 2, either 1 or 0.
//   if (value > 0) {
//     storage.unshift(value % 2);
//     value = Math.floor(value / 2); // Naturally it is floored
//     findBinary(value);
//   } else {
//     console.log(storage);
//     return storage;
//   }
// };

// console.log(findBinary(8));


// The code works but is inefficient because I had to loop through and do multiple steps.

// Here is an alternative solution that uses XOR operations and logical shifts.

// var hammingDistance = function(x, y) {
//   let diff = x ^ y;
//   let result = 0;
  
//   // find number of ones in the XOR result
//   while (diff > 0) {
//       if (diff & 1 === 1) result += 1;
//       diff >>= 1;
//   }
  
//   return result;
// };