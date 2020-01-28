/**
 * Function accepts a string and returns the length of the longest substring with all distinct characters.
 */
const findLongestSubstring = function(str) {
  let longest = 0;
  // Use an object when you need to be able to do quick search checks.
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // If the char is undefined that means it has not yet been used.
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }

  return longest;
};

// So you're basically iterating through each character and every time you are adding to the longest length using i - start + 1 which is the number of characters. On the case where if fails is seen[char] is already defined. In that case we set the new start equal to the next character. Little wonky.

// Simpler answer...
function findLongestSubstring(str) {
  let count = 0;
  let start = 0;
  let end = 0;
  let check = {};

  while (start < str.length) {
    if (!check[str[start]]) {
      check[str[start]] = true;
      start += 1;
    } else {
      check = {};
      end += 1;
      start = end;
    }

    count = Math.max(count, Object.keys(check).length);
  }

  return count;
}

// I agree with logic that empties the array but why even have an end variable? Just increment start by 1 should work.