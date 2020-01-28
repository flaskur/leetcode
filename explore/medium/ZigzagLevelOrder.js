/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. That means left to right then right ot left for the next level and alternate between. So for instance, the root would be normal order. The next level (1) would be in reverse order.
 * Try to do a variation of the iterative BFS with result and process array.
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
	// Edge case, empty tree
	if (root === null) return [];
	let result = [];
	let arr = [];
	arr.push([ root ]);

	// Alternate using counter % 2 === 0 ?
	let counter = 0;

	// arr should only hold another array called level.
	while (arr.length !== 0) {
		// console.log('iteration');
		// I think we need a mapping function so we actually get the values instead of the node instance. How do I know if the level ends though? I would have to iterate through the current array and build that entirely first.
		let level = [];
		arr[0].forEach((node) => {
			if (node !== null) {
				node.left && level.push(node.left);
				node.right && level.push(node.right);
			}
			// if (node.left) {
			// 	// console.log('left pushed onto level arr');
			// 	level.push(node.left);
			// }
			// if (node.right) {
			// 	// console.log('right pushed onto level arr');
			// 	level.push(node.right);
			// }
		});
		console.log(`level is ${level.map((lev) => lev.val)}`);

		if (counter % 2 === 0) {
			arr[0].forEach((node) => {
				if (node === null) console.log('null found');
			});
			result.push(arr[0].map((node) => node.val));
		} else {
			arr[0].forEach((node) => {
				if (node === null) console.log('null found');
			});
			result.push(arr[0].map((node) => node.val).reverse());
		}
		counter += 1;
		// console.log(`result is ${result}`);

		arr.shift();

		if (level.length === 0) break;
		arr.push(level);
		// console.log(`arr is now ${arr}`);
	}

	return result;
};
// Super annoying, missed the edge case of empty tree and was trying to find instance of null node, when it should never happen in the first place. This is really similar to the other level traversal problem, but you use a counter to alternate level order by reversing the array.
