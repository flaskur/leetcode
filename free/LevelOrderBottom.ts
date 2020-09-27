/**
 * Given a binary tree, return the bottom up level order traversal of its nodes' values.
 * I would make a hash map for each level with key as row num and value as the node values excluding null. Traversal method doesn't matter.
 */
const levelOrderBottom = (root: TreeNode | null): number[][] => {
	// edge case
	if (!root) {
		return [];
	}

	// level order map
	const levelMap = new Map();

	// recursively iterate and populate the hash map
	const helper = (node: TreeNode | null, row: number): void => {
		// base case
		if (!node) {
			return;
		}

		// add node val to level row array, otherwise create the array and add the node val
		if (levelMap.has(row)) {
			// only add to the map if a number, not null
			if (node.val || node.val === 0) {
				levelMap.set(row, [ ...levelMap.get(row), node.val ]);
			}
		} else {
			levelMap.set(row, [ node.val ]);
		}

		// recursively call children -> turns out to be dfs
		helper(node.left, row + 1);
		helper(node.right, row + 1);
	};

	helper(root, 1);

	// populate return result array with level map values
	let result = [];
	for (let values of levelMap.values()) {
		result.push(values);
	}

	// return the reversed order
	return result.reverse(); // result[::-1] in python
};
