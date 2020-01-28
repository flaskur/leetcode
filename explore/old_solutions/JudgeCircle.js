/**
 * There is a robot that is starting at the origin of a 2D plane.
 * Judge if the robot ends up at the origin after doing a few moves. 
 * The move sequence is given by a strng. URDL.
 * They way that the robot is facing doesn't really matter.
 * 
 * Probably should maintain an array which keeps track of vertical and horizontal coordinates.
 * Initialize an array with two elements starting at 0, 0. 
 * 
 * Iterate through the string and update values based on that. Better performance wise to convert the string into an array using either the Array.from, split, or spread operator. 
 */
const judgeCircle = function(moves) {
  let position = [0, 0];
  
  [...moves].forEach(function(character) {
    switch (character.toUpperCase()) {
      case 'U':
        position[0] += 1;
        break;
      case 'D':
        position[0] -= 1;
        break;
      case 'R':
        position[1] += 1;
        break;
      case 'L':
        position[1] -= 1;
        break;
      default:
        break;
    }
  });

  return (position[0] === 0 && position[1] === 0) ? true : false;
};


// Here's another solution that uses a HashTable. I don't know how that works but I'll put it down so I can reference it later.

// var judgeCircle = function(moves) {

//   var hash = []
//   for (var i = 0; i < moves.length; i++) {
//     if(!hash[moves[i]]) {
//       hash[moves[i]] = 1
//     } else {
//       hash[moves[i]]++
//     }
//   }
//   if(hash['D'] === hash['U'] && hash['L'] === hash['R']) {
//     return true
//   }
//   return false  
// };