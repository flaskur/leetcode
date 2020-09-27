/**
 * Given the root of a binary search tree and a target k, return true if there exist two elements in bst such that their sum is equal to the given target.
 * I would create a hash set and populate throughout traversal and return true if the target - currentNum is in the set. DFS or BFS would work here.
 * 
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
	// edge case
	if (!root) {
		return false;
	}

	const nums = new Set();

	// should be || of all results
	const helper = (node) => {
		if (!node) return false;

		if (nums.has(k - node.val)) return true;

		nums.add(node.val);

		return helper(node.left) || helper(node.right);
	};

	return helper(root);
};
