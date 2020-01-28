/**
 * Function takes an array of numbers and return the product of them all. It must be recursive.
 * I should use a helper method to keep track of total.
 * @param {number[]} arr is a list of numbers
 * @return {number} is the final product after multiplying them all together.
 * 
 * What about edge case with empty array? Product is null.
 */
const productOfArray = function(arr) {
  if (arr.length === 0) return null;
  
  let product = 1;

  let helper = function(currentArr) {
    if (currentArr.length === 1) {
      product *= currentArr[0];
      return;
    } 

    product *= currentArr[0];
    console.log('product is currently', product);

    return helper(currentArr.slice(1));
  };

  helper(arr);
  return product;
};

console.log(productOfArray([2,3,4,5]));