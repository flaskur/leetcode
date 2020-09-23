/**
 * Given a string s, return the reversed string where all letters stay in same place, but letters are reversed.
 * Two pointers approach but if either end is not a character, need to move pointer and repeat the while loop.
 */
const reverseOnlyLetters = (S: string): string => {
	// edge case
	if (S.length <= 1) return S;

	let start = 0;
	let end = S.length - 1;

	while (start < end) {
		// check that both values are characters
		if (
			S.charCodeAt(start) < 65 ||
			(S.charCodeAt(start) > 90 && S.charCodeAt(start) < 97) ||
			S.charCodeAt(start) > 122
		) {
			start += 1;
			continue; // repeat iteration
		}

		if (S.charCodeAt(end) < 65 || (S.charCodeAt(end) > 90 && S.charCodeAt(end) < 97) || S.charCodeAt(start) > 122) {
			end -= 1;
			continue; // repeat iteration
		}

		// at this point both start and end pointers are letters

		// strings are immutable, so i convert to array, swap, then convert back to string
		const strChars = [ ...S ];
		[ strChars[start], strChars[end] ] = [ strChars[end], strChars[start] ];
		S = strChars.join('');

		// update pointers
		start += 1;
		end -= 1;
	}

	return S;
};
