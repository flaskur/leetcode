/**
 * Given n tiles, where each tile has one letter, return the number of possible sequences of letters you can print with those tiles.
 * Pretty sure this is recursive, the letters aren't unique either. Maybe a hash map to store previously set sequences. Maybe backtracking a current string, but I need to ignore the characters that I've already added maybe by storing index in a hash set?
 */
const numTilePossibilities = (tiles: string): number => {
	// edge case
	if (tiles.length <= 1) {
		return tiles.length;
	}

	// hash set to store used sequences
	const sequences = new Set<string>();

	// hash set to store indices used for one particular recursion path
	const indices = new Set<number>(); // is this unique for each path?

	const helper = (tiles: string, current: string, indices: Set<number>): void => {
		// base case
		if (current.length === tiles.length) {
			// if it doesn't already exist in sequences list, add it
			if (!sequences.has(current)) {
				// console.log('adding', current);
				sequences.add(current);
			}
			return;
		}

		// add current to sequence
		if (!sequences.has(current) && current.length !== 0) {
			// console.log(`adding ${current}`);
			sequences.add(current);
		}

		// backtrack and try each path
		for (let i = 0; i < tiles.length; i++) {
			// make sure that char at that index hasn't been used yet
			if (indices.has(i)) {
				continue;
			}

			indices.add(i);
			current += tiles[i]; // add this char as a candidate
			helper(tiles, current, indices);

			// backtrack and don't use this candidate
			current = current.slice(0, current.length - 1);
			indices.delete(i);
		}
	};

	helper(tiles, '', indices);

	return sequences.size;
};
