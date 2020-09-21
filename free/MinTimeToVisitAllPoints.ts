/**
 * On a plane there are n points with integer coordinates. Find the min time in seconds to visit all points. You must visit them sequentially and you can move in any cardinal direction.
 * You should prioritize moving diagonally towards the next point unless one of the coordinates is the same, in which case you should move vertically or horizontally.
 * This seems like a recursion problem, but I have to loop for each coordinate pair since there might be many.
 */
const minTimeToVisitAllPoints = (points: number[][]): number => {
	// edge case
	if (!points.length || points.length === 1) return 0;

	let seconds = 0;

	// we check pairwise so the iteration stops at the second last coordinates since we check i+1 each time
	for (let i = 0; i < points.length - 1; i++) {
		seconds += travel(points[i], points[i + 1], 0);
	}

	return seconds;
};

// should have probably used a couple switch cases...
const travel = (current: number[], goal: number[], seconds: number): number => {
	// console.log(current);

	// base case
	if (current[0] === goal[0] && current[1] === goal[1]) {
		// console.log('took', seconds);
		return seconds;
	}

	// move horizontal or vertical if one of the values match
	if (current[0] === goal[0] || current[1] === goal[1]) {
		// horizontal matches, move vertical
		if (current[0] === goal[0]) {
			// move up
			if (goal[1] > current[1]) {
				current[1] += 1;
				return travel(current, goal, seconds + 1);
			} else {
				// move down
				current[1] -= 1;
				return travel(current, goal, seconds + 1);
			}
		}

		// vertical matches, move horizontal
		if (current[1] === goal[1]) {
			// move right
			if (goal[0] > current[0]) {
				current[0] += 1;
				return travel(current, goal, seconds + 1);
			} else {
				// move left
				current[0] -= 1;
				return travel(current, goal, seconds + 1);
			}
		}
	}

	// move diagonal
	let horizontal = goal[0] - current[0];
	let vertical = goal[1] - current[1];

	// up right
	if (horizontal > 0 && vertical > 0) {
		current[0] += 1;
		current[1] += 1;
		return travel(current, goal, seconds + 1);
	}
	// down right
	if (horizontal > 0 && vertical < 0) {
		current[0] += 1;
		current[1] -= 1;
		return travel(current, goal, seconds + 1);
	}
	// up left
	if (horizontal < 0 && vertical > 0) {
		current[0] -= 1;
		current[1] += 1;
		return travel(current, goal, seconds + 1);
	}
	// down right
	if (horizontal < 0 && vertical < 0) {
		current[0] -= 1;
		current[1] -= 1;
		return travel(current, goal, seconds + 1);
	}

	// console.log('end');
	return seconds;
};

// shorter using distance formula
const minTimeToVisitAllPoints = (points: number[][]): number => {
	// edge case
	if (!points.length || points.length === 1) return 0;

	let seconds = 0;

	// typescript throws an error because shift can return undefined
	let coordinate: number[] = points.shift() || [ 0, 0 ];
	let x1 = coordinate[0];
	let y1 = coordinate[1];

	while (points.length) {
		// typescript knows that shift can return undefined
		let [ x2, y2 ] = points.shift() || [ 0, 0 ]; // take next pair
		seconds += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)); // find distance
		[ x1, y1 ] = [ x2, y2 ]; // update current coordinates
	}

	return seconds;
};
