/**
 * Sort an array by parity. We are given an array called A and we want to return an array with even elements, then another with odd elements.
 * It does not expect two different arrays, but rather one that is sorted in that manner.
 * How do we optimize this? Probably make a new array first right?
 * Another thing to note is that the sorting in between even and odds don't really matter. Probably best to adopt a scheme from least to greatest.
 * The length of the array will always be 1 or more and less than 5001.
 * All the values in the array are integers that are non negative.
 * 
 * We have to loop through A anyways, but I want to avoid going through it twice. Also, the brute force method would sort each individually before combining together.
 */


let sortArrayByParity = function(A) {
  let evenArray = new Array();
  let oddArray = new Array();

  A.forEach(function(element) {
    if (element % 2 === 0) evenArray.push(element);
    else oddArray.push(element);
  });

  // Sort function mutates the original value.
  evenArray.sort(function(a, b) {
    return (a - b); // Ascending.
  });

  oddArray.sort(function(a, b) {
    return (b - a);
  });

  let parityArray = [...evenArray, ...oddArray];

  return parityArray;

  

  // A.forEach(function(element) {
  //   element % 2 === 0 ? parityArray.unshift(element) : parityArray.push(element);
  // });

  // Now we have an array, but it's not sorted correctly. The even values are in front because of unshift, and the odd values are in the back. How do you sort then?
  // It would have been easier to do this before hand.


  // External solutions

  // Uses a filter and concat method. Same logic as mine but a lot simpler.
  // var sortArrayByParity = function(A) {
  //   let even = A.filter(a => a % 2 === 0);
  //   let odd = A.filter(a => a % 2 === 1);
  //   return even.concat(odd);
  // };


  // Not sure why there it is exported...
  // Uses a for of loop to go through iterable elements. My original idea of unshifting the even elements and pushing the odd elements is valid? I though sorting mattered? If not that means I did that extra step for no reason.
  // var sortArrayByParity = module.exports = function(A) {
  //   let res = [];
  //   for (a of A) {
  //       if (a % 2 ===0) res.unshift(a);
  //           else res.push(a);
  //   }
  //   return res;
    
  // };


}