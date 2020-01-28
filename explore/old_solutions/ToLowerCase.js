// The toLowerCase method takes a string and returns the same string in lowercase. This seems really fucking easy. I believe there is a toLowerCase method too.

// That said, I think I have to handle cases where the input string is just white spaces.

// It's actually as easy as it sounds. Though that seems like cheating. Instead you could have converted the str to an array using the split method by character. Used a mapping method to create a new array of characters that are lowercase, then join back into a string. Basically the same thing though with unnecessary steps.

// Without advanced methods you could have used a basic for loop and checked char code to see if it's a lower case letter.
let toLowerCase = function(str) {
  return str.toLowerCase();
};

// The other implementation that actually requires thinking.
// Utilizes the mapping function and ascii codes. Also some manipulation with strings and arrays.
const toLowerCase = function(str) {
  const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));

  return Array.from(str).map(char => {
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(char.charCodeAt(0) + DIFF);
    } else return char;
  }).join('');
}