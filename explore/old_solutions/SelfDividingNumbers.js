/**
 * A self dividing number is a number that is divisible by every digit it contains.
 * A self dividing number cannot contain 0 because nothing is divisible by 0.
 * We are given a lower and upper number bound and we have to check for all self dividing numbers.
 * The logic is to convert the number into an array of integers for each digit. You can first convert it do a string then do the split method based on characters. That could work.
 * 
 * Any edge cases? The boundary numbers will never be less than 1 and the right boundary will never be more than 1000. 
 */

const selfDividingNumbers = function(left, right) {
  let dividingNumbers = new Array();
  let currentNumber = left;
  for (currentNumber; currentNumber <= right; currentNumber += 1) {
    let digits = currentNumber.toString().split('');
    let isDivNum = digits.every(digit => {
      return (currentNumber % digit === 0);
    });

    if (isDivNum) dividingNumbers.push(currentNumber);
  }

  return dividingNumbers;
};

// Solution worked with 25% better. 

// Another implementation
// Using a fill method to initialize an array with 0 values. Also some mapping and filtering which seems a little confusing.

// var selfDividingNumbers = function(left, right) {
//   return new Array(right - left +1)
//           .fill(0)
//           .map( (item,index) => index+left )
//           .filter( item => check(item) );
// };

// function check(num){
//   return num.toString().split('')
//           .find( (item) => num%parseInt(item) != 0 ) == undefined ;
// }