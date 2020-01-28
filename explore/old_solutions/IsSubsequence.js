/**
 * This function takes two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * So cehck if the chars in the first string appear in the second string without order changing.
 * @param {string} firstString should be subsequence of secondString
 * @param {string} secondString should contain firstString
 * @return {boolean} depending on whether or not firstString is a substring of secondString.
 */
const isSubsequence = function(firstString, secondString) {
  // You need to use multiple pointers. You could iterate through the secondString and keep track of the current character. That would require O(n^2) though. 
  if (secondString.length < firstString.length) return false;
  
  let firstPointer = 0;  
  let secondPointer = 0;  

  let firstTest = '';
  let secondTest = '';

  // So compare the first instance of firstString[firstPointer]. If the secondString[secondPointer] equals that then we continue and move both pointers. The end condition is the firstPointer equal to firstString.length + 1.

  while (secondPointer < secondString.length) {
    // We move the pointer and if the pointer ends at a point where firstString[firstPointer] is undefined, then we know it worked.
    if (firstPointer > firstString.length - 1) {
      console.log('first pointer is greater than last possible index, should return true');
      return true;
    }

    if (firstString[firstPointer] === secondString[secondPointer]) {
      firstTest += firstString[firstPointer];
      secondTest += secondString[secondPointer];
      console.log('chars are equal, move both pointers', firstTest, secondTest);
      
      firstPointer += 1;
      secondPointer += 1;
    } else {
      secondTest += secondString[secondPointer];
      console.log('chars are not equal, only move the second pointer', firstTest, secondTest);

      secondPointer += 1;
    }
  }

  // Since we increment first pointer, it can miss if the last one is equal.
  if (firstPointer > firstString.length - 1) return true;

  return false;
};


isSubsequence('abce', 'abzce');
console.log(isSubsequence('abce', 'abzce'));

// Official Solution - Iterative, same logic as above but cleaner.
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// Official Solution - Recursive
// Mutates the strings using slice and continues until one of the strings is empty. Actually pretty clever.
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}