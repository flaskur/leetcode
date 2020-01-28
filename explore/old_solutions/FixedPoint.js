// The input is variable A and it is an array object.
// So basically we go through the array and check if index in the array is the same as the element value. I'm pretty sure the forEach method already has an optional parameter for that.

// Okay so kind of fucked up. I tried doing a forEach loop and the values were correct, but the return didn't work for some reason.

// So the forEach keeps doing the iteration even though it returns.

// The forEach loop DOESN'T RETURN ANYTHING!
// That is to say, if you had to use a forEach loop, you can still apply values to outside variables and return outside the forEach loop. You just need to have boolean flags to get the correct data.

var fixedPoint = function(A) {
  for(let i = 0; i < A.length; i += 1) {
    if (A[i] === i) return A[i];
  }
  return -1;
};

