/**
 * Given a 2D grid of 1's and 0's which represent land and water respectively, count the number of islands. An island is surrounded by water and connected to other pieces of land vertically and horizontally.
 * Important to note that the actual element of the grid are represented as characters, not numbers.
 * So, I can individually check if a piece of land is connected to any other piece of land by checking vertically and horizontally. This is actually quite difficult. I believe this is a graph question and that I need to mark them as visited or not. If a visit a particular land piece, how can I also visit all the pieces connected to it? It would be recursive in nature. Basically, I would have to make a hash but have the i and j index represent the particular land piece. Then I would have to do a O(n^2) visitation on everything. When I visit something I haven't visited, I increase some counter. On a particular piece of land, I need to recursively check the horizontal and vertical places and then repeat that process just to mark visited or not. That's 4 cases. Then in the normal for loop, it will see that the particular islands are already visited and thus won't be counted. 
 * 
 * @param {character[][]} grid
 * @return {number}
 */
// This function should recursively call itself until it no other adjacent pieces are not marked as visited. What about edge case where i or j is on the border? Then you wouldn't have to check the +/- 1 case right? If I explicit set hash to false, then I don't have to do an edge case for the +/- 1 cases.
const mark = function(i, j, hash, x, y) {
	if (hash[i.toString() + j.toString()] === false) {
		// console.log(`${i}${j} marked as true`);
		hash[i.toString() + j.toString()] = true;
	}
	// If all the vertical and horizontal  pieces are already marked as true (or undefined for edge cases), then we can end recursion and just return. It's very likely that one will trigger and topple everything else, but you have to handle all 4 cases in case it's like a flower or something.

	let left = i.toString() + (j - 1).toString();
	let right = i.toString() + (j + 1).toString();
	let down = (i - 1).toString() + j.toString();
	let up = (i + 1).toString() + j.toString();

	if (
		(hash[left] === true || hash[left] === undefined) &&
		(hash[right] === true || hash[right] === undefined) &&
		(hash[down] === true || hash[down] === undefined) &&
		(hash[up] === true || hash[up] === undefined)
	) {
		// console.log(`index ij ${i}${j} end case`);
		return;
	} else {
		if (j - 1 >= 0) mark(i, j - 1, hash, x, y);
		if (j + 1 < x) mark(i, j + 1, hash, x, y);
		if (i - 1 >= 0) mark(i - 1, j, hash, x, y);
		if (i + 1 < y) mark(i + 1, j, hash, x, y);
	}
};
const numIslands = function(grid) {
	// Need a boolean hash to represent whether an island ij has been visited or not. For now, all of them have not been visited so we can either leave as undefined, or explicitly set to false, though that would be an O(# elements operation).
	let x = grid[0].length;
	let y = grid.length;
	let hash = {};
	let islands = 0;
	// Explicitly set the hash keys ij to false.
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			hash[i.toString() + j.toString()] = false;
		}
	}

	// Iterate through every element. If it's not already in the hash, then we need to do the recursive operation of checking visited off.
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			// If we encounter a land piece and the piece has not already been visited, mark.
			if (grid[i][j] === '1' && hash[i.toString() + j.toString()] === false) {
				islands += 1;
				console.log('ISLANDS COUNT INCREASED');
				// hash[i.toString() + j.toString()] = true;
				mark(i, j, hash, x, y);
			}
		}
	}

	return islands;
};

console.log(
	numIslands([
		[ '1', '1', '1', '1', '0' ],
		[ '1', '1', '0', '1', '0' ],
		[ '1', '1', '0', '0', '0' ],
		[ '0', '0', '0', '0', '0' ]
	])
);

// Fresh Start
const numIslands = function(grid) {
	// Don't need a hash if I just set all of them to 0.
	// let hash = {};
	// for (let i = 0; i < grid.length; i++) {
	// 	for (let j = 0; j < grid[0].length; j++) {
	// 		hash[i.toString() + j.toString()] = false;
	// 	}
	// }
	let counter = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === '1') {
				console.log('found a spot');
				counter += 1;
				setZero(i, j, grid);
			}
		}
	}

	return counter;
};

// Set the neighbors of element at i and j to zero and recursively call until all neighbors are zero.
const setZero = function(i, j, grid) {
	grid[i][j] = '0';

	let upValid = false;
	let downValid = false;
	let leftValid = false;
	let rightValid = false;

	if (i - 1 >= 0) upValid = true;
	if (i + 1 < grid.length) downValid = true;
	if (j - 1 >= 0) leftValid = true;
	if (j + 1 < grid[0].length) rightValid = true;

	// End case is if all adjacent are either 0 or undefined.
	if (
		(grid[i - 1][j] === '0' || !upValid) &&
		(grid[i + 1][j] === '0' || !downValid) &&
		(grid[i][j - 1] === '0' || !leftValid) &&
		(grid[i][j + 1] === '0' || !rightValid)
	) {
		console.log('end case');
		return;
	}

	upValid && setZero(i - 1, j, grid);
	downValid && setZero(i + 1, j, grid);
	leftValid && setZero(i, j - 1, grid);
	rightValid && setZero(i, j + 1, grid);
	// Problem here is that you are setting a copy of the reference but it's only changing the value of the copy.
};

const numIslands = function(grid) {
	let count = 0;
	let n = grid.length;
	if (n === 0) return 0;
	let m = grid[0].length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (grid[i][j] === '1') {
				mark(grid, i, j);
				count += 1;
			}
		}
	}
	return count;
};

const mark = function(grid, i, j) {
	// End case is actually invalid out of bounds or 0, return.
	if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] === '0') return;
	grid[i][j] = '0';
	mark(grid, i - 1, j);
	mark(grid, i + 1, j);
	mark(grid, i, j - 1);
	mark(grid, i, j + 1);
};

// Okay, this works. The reason why I was messing up is because my end case was checking all the adjacent pieces. Instead just go to the possibly invalid piece and use that as an end case. Spent too much time on it though.
