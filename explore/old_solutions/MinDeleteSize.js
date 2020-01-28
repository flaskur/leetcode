/**
 * Given an array of N strings that are all lowercase and all the same number of characters.
 * We choose any set of deletion incides and remove the characters for all those indices.
 * So the 'columns' are represented by the indices not the actual letters. The goal is to choose a index position such that you remove it from all the strings. We want the instance where the final value is nondecreasing so something like 'abc' and not 'ebf' for columns.
 * How do you choose though? You have to iterate through each index and check if they work. Do letters have conditionals?
 */

const minDeletionSize = function(A) {
  // Empty Array?
  let orderArray = new Array();
  let indexHit = new Array();
  
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length; j++) {
      orderArray.push(A[j][i]);
    }

    // How do we check order? We could make a temp array and sort that by ascending, then check with the other.

    let tempArray = [...orderArray].sort((a, b) => {
      return a.charCodeAt(0) - b.charCodeAt(0);
    });

    console.log('temp array', tempArray);
    console.log('order array', orderArray);

    // Are arrays copy by reference or value? In any case I need to check if the values and positions of one array are the exact same as another.
    
    if (tempArray.join() !== orderArray.join()) {
      console.log('temp array is not equal to order array');
      indexHit.push(i);
    }

    orderArray = [];
  }

  console.log(indexHit);

  return indexHit.length;
};

// Okay my submission worked but it was absolutely terrible performance wise. I had to use a double for loop and multiple iterations. I don't think this can be done without a double for loop anyways.


// Below is a good and simple implementation

// var minDeletionSize = function(A) {
    
//   // increment this if we find a
//   // column that is out of order
//   let numColumnsToDelete = 0;

//   // all strings in the array
//   // are the same length
//   const strLength = A[0].length;

//   // outer loop checks entire string
//   for (let i = 0; i < strLength; i++) {

//       // inner loop checks the colunns
//       for (let j = 0; j < A.length - 1; j++) {

//           const top = A[j][i];
//           const bottom = A[j + 1][i];

//           if (top > bottom) {
//               numColumnsToDelete++;
//               break;
//           }
//       }
//   }

//   return numColumnsToDelete;
// };