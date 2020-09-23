/**
 * There are a number of piles arranged in a row and the objective is to end the game with the most stones. On each player's turn they can take all the stones in the first X remaining piles where 1 <= X <= 2M where M = max(M, X).
 * Initially the first player can take 1 or 2 piles. If they take two piles M will be updated to 2 which means next round the next player can take at most 4.
 * Since they play optimally, this is probably a backtracking problem since a greedy approach isn't always optimal.
 */
const stoneGameII = (piles: number[]): number => {
	let maxStones = 0; // we update this on edge case

	const helper = (piles: number[], index: number, turn: number, stones: number, maxTake: number): void => {
		console.log('index', index, 'turn', turn, 'stones', stones, 'maxTake', maxTake);

		// base case
		if (index >= piles.length) {
			console.log('base case', maxStones, stones);
			maxStones = Math.max(maxStones, stones);
		}

		// you need to backtrack with each case of taking n piles.
		// also need to know how many piles are left
		let pilesLeft = piles.length - index;

		let take = 1;

		// both players play optimally
		while (take <= 2 * maxTake) {
			console.log('takes this time', take);
			if (pilesLeft >= take) {
				if (turn === 1) {
					let newStones =
						stones + piles.slice(index, index + take).reduce((total, current) => total + current);
					console.log('takes', take, 'newStones', newStones);
					helper(piles, index + take, 2, newStones, Math.max(maxTake, take));
				} else {
					helper(piles, index + take, 1, stones, Math.max(maxTake, take));
				}
			}

			take += 1;
		}
	};

	// helper function will modify maxStones if the end of the recursion has a result greater than current maxStones
	helper(piles, 0, 1, 0, 1);

	return maxStones;
};
