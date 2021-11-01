function longestPalindrome(s: string): string {
	// substring implies continuous sequence within string
	// palindrome can be even or odd, so choose a start point and flare out until failure

	// init as first char bc single char is palindrome
	let longest = s[0]

	let center = 0
	while (center < s.length - 1) {
		// find longest palin substring for both even odd cases
		let odd = helper(s, center, center)
		let even = helper(s, center, center + 1) // runs even though it can fail

		// check if it beats existing longest
		if (odd.length > longest.length) {
			longest = odd
		}
		if (even.length > longest.length) {
			longest = even
		}

		center++
	}

	return longest
}

function helper(s: string, start: number, end: number): string {
	// base case
	if (start < 0 || end > s.length - 1 || s[start] != s[end]) {
		// start/end are inclusive so start+1, end implies excluding failure start and end
		return s.slice(start + 1, end)
	}

	return helper(s, start - 1, end + 1)
}
