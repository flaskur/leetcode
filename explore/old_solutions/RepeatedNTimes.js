/**
 * Given an array A of size 2N, there are N + 1 unique elements and exactly one of those elements is repeated N times. Basically saying that there is one element that populates half the array.
 * We want to return this element.
 * So what that means if that we only need to go through the array until we find a number that is repeated twice and since every other number only occurs once, we know that specific element that occurred twice will also occur N times. That means we don't necessarily have to go through the whole array.
 * The problem is keeping a count of unique numbers. Doing consecutive would be easy. 
 * We can have an array of the elements that already exist, then check if it is included inside of that array. If so then we know it already occurred.
 * You cannot use a forEach loop because we want to return during iteration. Use a for of loop instead.
 * This depends on the fact that every other element is unique. If we didn't know that, would have to find the number, then keep a count of the number until it reaches which is much more impractical.
 */


const repeatedNTimes = (A) => {
  let existsArray = new Array();
  for (let element of A) {
    if (existsArray.includes(element)) return element;
    else {
      existsArray.push(element);
    }
  }
};