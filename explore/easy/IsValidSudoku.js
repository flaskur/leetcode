/**
 * Given a 9x9 sudoku board, determine if it's valid. The board is modeled using a two dimensional array meaning an array that contains 9 arrays (rows) that have 9 items for each array (columns).
 * The placeholder for empty seems to be a period '.' and you need to handle 3 particular cases. To check each row, it has the same initial index. Use a hash map to keep track of the current boolean for the number and if it occurs again, return false. You would need to reset that for each index though.
 * For the column case they all have the same second index and when you finish you increment the initial index. The main iteration would be from 0 to 8 for the second param and then the first increment is inner change.
 * I don't know how to handle the tri blocks though. Needs to be a restricted 3x3 block and you need to check that with some pattern.
 * 
 * @param {character[][]} board
 * @return {boolean} true for valid board.
 */
const isValidSudoku = function(board) {
	// let numCheck = {};

	// // Check all the rows to see if it's valid.
	// for (let i = 0; i < board[0].length; i++) {
	// 	for (let j = 0; j < board[0].length; j++) {
	// 		// Populate the numCheck and if you encounter a repeat, return false.
	// 		if (numCheck[board[i][j]] === true) {
	// 			console.log(`num ${board[i][j]} already appeared -> Not valid`);
	// 			return false;
	// 		} else if (board[i][j] !== '.') {
	// 			console.log(`num ${board[i][j]} inserted into numCheck`);
	// 			numCheck[board[i][j]] = true;
	// 		}
	// 	}

	// 	// Reset for each row.
	// 	numCheck = {};
	// }

	// // Check if the columns are valid.
	// for (let j = 0; j < board[0].length; j++) {
	// 	for (let i = 0; i < board[0].length; i++) {
	// 		// Populate the numCheck and if you encounter a repeat, return false.
	// 		if (numCheck[board[i][j]] === true) {
	// 			console.log(`num ${board[i][j]} already appeared -> Not valid`);
	// 			return false;
	// 		} else if (board[i][j] !== '.') {
	// 			console.log(`num ${board[i][j]} inserted into numCheck`);
	// 			numCheck[board[i][j]] = true;
	// 		}
	// 	}

	// 	// Reset for each column change.
	// 	numCheck = {};
	// }

	// // Check if each 3x3 block is valid.
	// // How would I isolate the blocks? The first block is from indices 0-2, 0-2. The second block is from 0-2, 3-5. The third is 0-2, 6-8. Then that same pattern repeats.

	// for (let i = 0; i < 9; i++) {
	// 	let rows = {};
	// 	let columns = {};
	// 	let cube = {};

	// 	for (let j = 0; j < 9; j++) {
	// 		if (board[i][j] !== '.' && rows[board[i][j]] === true) {
	// 			// We already have it in rows hash map.
	// 			return false;
	// 		} else rows[board[i][j]] = true;

	// 		if (board[j][i] !== '.' && columns[board[j][i]] === true) {
	// 			return false;
	// 		} else columns[board[j][i]] = true;

	// 		let rowIndex = 3 * (i / 3);
	// 		let columnIndex = 3 * (i % 3);
	// 		if (
	// 			board[rowIndex + j / 3][columnIndex + j % 3] !== '.' &&
	// 			board[board[rowIndex + j / 3][columnIndex + j % 3]] === true
	// 		) {
	// 			return false;
	// 		} else cube[board[rowIndex + j / 3][columnIndex + j % 3]];
	// 	}

	// 	return true;
	// }

	let rowMap = {};
	const colMaps = [];
	const boxMaps = [];
	let boxRowIdx;
	let boxCellIdx;
	let c;
	for (let i = 0; i < board.length; i++) {
		rowMap = {};
		for (let j = 0; j < board[i].length; j++) {
			c = board[i][j];
			if (c !== '.') {
				//row check
				rowMap[c] = (rowMap[c] || 0) + 1;
				if (rowMap[c] > 1) {
					return false;
				}
				//col check
				colMaps[j] = colMaps[j] || {};
				colMaps[j][c] = (colMaps[j][c] || 0) + 1;
				if (colMaps[j][c] > 1) {
					return false;
				}
				//3*3 check
				boxRowIdx = Math.ceil((i + 1) / 3);
				boxCellIdx = Math.ceil((j + 1) / 3);
				boxMaps[boxRowIdx] = boxMaps[boxRowIdx] || {};
				boxMaps[boxRowIdx][boxCellIdx] = boxMaps[boxRowIdx][boxCellIdx] || {};
				boxMaps[boxRowIdx][boxCellIdx][c] = (boxMaps[boxRowIdx][boxCellIdx][c] || 0) + 1;
				if (boxMaps[boxRowIdx][boxCellIdx][c] > 1) {
					return false;
				}
			}
		}
	}
	return true;
};
