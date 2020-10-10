/**
 * Given a non empty string, you may delete at most one character. Judge whether you can make a palindrome.
 * Two pointers approach and on failure, I would skip on both sides.
 * 
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
	if (s === [...s].reverse().join('')) return true;

	let i = 0;
	let j = s.length - 1;

	while (i < j) {
		if (s[i] !== s[j]) {
			removedLeft = s.slice(0, i) + s.slice(i + 1);
			removedLeftReverse = [...removedLeft].reverse().join('');
			// console.log('left', removedLeft, removedLeftReverse);
			if (removedLeft === removedLeftReverse) return true;
			
			removedRight = s.slice(0, j) + s.slice(j + 1);
			removedRightReverse = [...removedRight].reverse().join('');
			// console.log('right', removedRight, removedRightReverse);
			if (removedRight === removedRightReverse) return true;
			
			return false;
		}

		i++;
		j--;
	}

	return true;

};