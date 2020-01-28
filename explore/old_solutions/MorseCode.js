/**
 * Morse code function takes an array of strings and we must loop through each word and each character.
 * Covert to the morse code representation using the char code and push onto an array collection.
 * Then we check the number of unique representations in that array and return the count.
 */

let uniqueMorseRepresentations = function(words) {
  const morseConversion = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  let morseCollection = [];
  words.forEach((word) => {
    let wordArray = word.split('');
    let morseString = '';
    wordArray.forEach((character) => {
      let alphaIndex = character.charCodeAt(0);
      console.log(alphaIndex);
      morseString =+ morseConversion[alphaIndex - 97]; // This should append the letter to morseString.
    });

    console.log(morseString);
    
    // After a single word is looped through, we have a complete morseString that needs to be pushed onto the morseCollection array.
    morseCollection.push(morseString);

    // Don't need to reset since morseString set to '' on each loop.
  });

  // morseCollection contains all words in morse code. Now need to find the unique ones.

  let count = 0;
  let uniqueMorse = [];
  morseCollection.forEach(morseCode => {
    if (!uniqueMorse.includes(morseCode)) {
      count += 1;
      uniqueMorse.push(morseCode);
    }
  });

  return count;
};


// I am getting a NAN value. Errors with syntax and forgetting to subtract by 97.

// Okay so the result is correct but the time complexity is fucking terrible. I'm getting 140ms which is like lowest 5%. 


// Also, I should be converting each character to lowercase because the ascii code for each character depends on case. The only reason it worked is because the input was expected to be only lower case.


// Below is an alternative route. Notice that they use a map and reduce method to make things a bit simpler. He defines an outside method called getIdx to get the actual alphabet index. Instead of -97, it's better to do 'a'.charCodeAt(0).

// Also another thing to note is how he used Sets. Sets by definition cannot include duplicates, so all you have to do after populating the set is return the size. Really clever.

// const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// const getIdx = char => char.charCodeAt(0) - 'a'.charCodeAt(0)

// var uniqueMorseRepresentations = function(words) {
//     return words.map( word => word.split('')
//                                  .map( char => codes[getIdx(char)])
//                                  .join(''))
//                 .reduce((set, cur) => set.add(cur), new Set())
//                 .size
// };