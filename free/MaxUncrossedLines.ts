/**
 * A and B represent two horizontal lines of numbers which don't have to be the same length. You draw as many connecting lines from on horizontal line to another but none of the lines can intersect at all.
 * The naive approach would be to just use a hash set for B and ignore the ones already selected, but that would not exclude the cases where lines cross. You can iterate through A and on first find in B, disqualify all indices before it. That wouldn't work because if the match in B is at the very end, you disqualify everything.
 * This is also a candidate approach where you have to choose which A to start search from left to right. You would probably have to keep current index to exclude the indices in B already passed.
 */
const maxUncrossedLines = (A: number[], B: number[]): number => {
	// edge case
	if (A.length === 0 || B.length === 0) return 0;

	let maxLines = 0;
	let usedIndices = new Set<number>(); // for A to avoid duplicate candidates
	let disqualifiedIndices = new Set<number>(); // for B to avoid crossing

	const helper = (A: number[], B: number[], currentA: string, lines: number): void => {
		// base case
		if (currentA.length === A.length) {
			console.log('base case visited', currentA);
			maxLines = Math.max(maxLines, lines);
			return;
		}

		for (let i = 0; i < A.length; i++) {
			// ignore a used candidate
			if (usedIndices.has(i)) {
				continue;
			}

			// try this candidate
			usedIndices.add(i);
			currentA += A[i].toString();
			console.log('candidatesss', currentA);

			let flag = false; // to check if candidate matched at least once
			let disq = []; // to keep track of which indices were cleared for this particular candidate

			for (let j = 0; j < B.length; j++) {
				// skip b indices that would cross up or would already be taken
				if (disqualifiedIndices.has(j)) {
					continue;
				}

				// found a match, go down this recursive path with the current A
				if (A[i] === B[j]) {
					flag = true; // if flag is false at the end of the loop, then that means the candidate had no match, but we still must add to currentA
					console.log('found match at', j, B[j]);

					// disqualify all indices from j index to i
					if (j <= i) {
						for (let k = j; k <= i; k++) {
							console.log('disqualified', k);
							disqualifiedIndices.add(k);
							disq.push(k);
						}
					} else if (i < j) {
						for (let k = i; k <= j; k++) {
							console.log('disqualified', k);
							disqualifiedIndices.add(k);
							disq.push(k);
						}
					}

					helper(A, B, currentA, lines + 1);
				}

				if (!flag) {
					helper(A, B, currentA, lines);
				}
			}

			// backtrack
			usedIndices.delete(i);
			for (let index of disq) {
				disqualifiedIndices.delete(index);
			}
			currentA = currentA.slice(0, currentA.length - 1);
		}
	};

	helper(A, B, '', 0);

	return maxLines;
};

// problem is that just left to rigth avoids cross from left to right but not rigth to left
// if you choose a candidate and you find a result, you must disqualify all b indices from the original a index to the found b index
// im gonna try and set a disqualified b index set
