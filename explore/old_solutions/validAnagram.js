/**
 * Anagram checker where we don't have to worry about edge cases like uppercase letters or whitespaces. I believe empty strings are handled as well.
 */

const Anagram = function(string1, string2) {
  let freqCounter1 = new Object();
  let freqCounter2 = new Object();

  // Populate the objects.
  for (let character of string1) {
    freqCounter1[character] = (freqCounter1[character] || 0) + 1;
  }
  for (let character of string2) {
    freqCounter2[character] = (freqCounter2[character] || 0) + 1;
  }

  // For loop to check if the character exists in both and if so, then we check if the count(value) are the same.
  for (let key in freqCounter1) {
    // Constant time because accessing an object. The 'in' syntax can be treated as an if conditional of freqCounter2[key] === undefined. It is better than accessing with the array with the includes() method.
    if (!(key in freqCounter2)) return false;

    if (freqCounter1[key] !== freqCounter2[key]) return false;
  }

  return true;
};

// Alternative - similar logic except it uses a single object and decrements the values. Could use cleaner for/of loops.
// Decrement logic works because we use a lookup each time and a 0 value is falsey.
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // If lookup[letter] is not inside the object --> undefined, then we set to 1, otherwise increment by 1. Works because undefined is a falsey value for conditional statement.
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) return false;
    // Decrement logic which mutates the lookup object.
    else lookup[letter] -= 1;
  }

  return true;
}