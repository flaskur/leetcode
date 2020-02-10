/**
 * Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * So basically, we need to find every single subset but we don't care about starting order or rather we can't keep track of that. Also how would you even traverse through the board?
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
	let w = [ ...word ];
	for (let y = 0; y < board.length; y++) {
		for (let x = 0; x < board[0].length; x++) {
			if (helper(board, y, x, w, 0)) return true;
		}
	}
	return false;
};

const helper = function(board, y, x, word, i) {
	// End case is when i becomes word.length, meaning we are trying to fail it?
	if (i === word.length) return true;
	// Handle out of the board cases.
	if (y < 0 || x < 0 || y === board.length || x === board[y].length) return false;
	if (board[y][x] != word[i]) return false;

	// Marker to avoid doing the calculation again.
	board[y][x] = '*';
	let exists =
		helper(board, y, x - 1, word, i + 1) ||
		helper(board, y, x + 1, word, i + 1) ||
		helper(board, y - 1, x, word, i + 1) ||
		helper(board, y + 1, x, word, i + 1);
	board[y][x] = word[i];
	return exists;
};

// This one was difficult. The solution is to traverse through the entire board and choose all of them as a potential starting point. Then we have to try to break it. The end case is when the index keeper becomes the actual length of the word meaning, it continues to pass the test for word comparison. Our recursion check looks at the adjacent spaces so we need to be careful about undefined behavior outside the board. Basically we move to all possible adjacent spaces and if it is not equal to the index of the word we want, immediate failure. Mark as * to taken for the current iteration, but also note that we return it afterwards so it doesn't mess up the other board checks. Tricky but really interesting.
