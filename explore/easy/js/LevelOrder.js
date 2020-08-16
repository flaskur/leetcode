/**
 * Given a binary tree, return the level order traversal from left to right. The return should be an array of arrays where the inner arrays compose each level.
 * The obvious approach is to copy the BFS search methodology of using a queue to hold everything and continually shift until empty, where each shift includes the push onto the queue again until there are no children.
 * That will give you level order but in a typically array structure. You need to separate each level in a single array.
 * How to separate by level? For one particular node, the children should all be on the same level. The confusing portion is when you have multiple nodes.
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
	if (root === null) return [];

	// result will hold the values.
	let result = [];
	// queue used to level iterate.
	let queue = [];

	// Remember that the context is that the level holds nodes for each level. It will push the entire level onto the queue and it will be processed as a singular group.
	let level = [ root ];
	queue.push(level);
	// The queue is now an array of arrays.
	while (queue.length !== 0) {
		// Shouldn't I add to result first before getting next level stuff?

		// shiftedNodes is an array of nodes.
		let shiftedNodes = queue.shift();

		result.push(shiftedNodes.map((node) => node.val));
		console.log('result is now', result);

		// Okay, result is updated, we now need the next level batch.

		level = [];

		shiftedNodes.forEach((node) => {
			// For every node in the previous level, we push onto the new level if they have a left or right child.
			node.left && level.push(node.left);
			node.right && level.push(node.right);
		});

		// queue gets the next set of levels. Might be flaw with iteration. If nothing in level array, we should break out of loop.
		if (level.length === 0) {
			console.log('level is empty, break');
			break;
		}

		queue.push(level);
	}

	console.log('final is', result);
	return result;
};

// This is just a variation of the BFS algorithm but this time we compile each level as an array. This means the iterative approach with the queue consistently has a length of 1 or 0 at end case because we pass a whole array containing the nodes of the level. To process each level you push the value for each node into the result array and then fill the next one by pushing into cleared level array with the children of each node in order. End case is when we have nothing in the level array which means we technically didn't need the queue.length === 0 check. Instead you could have just done a while true condition.
