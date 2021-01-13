/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// recursive using outer scope total var
const sumOfLeftLeaves = root => {
	// edge case
	if (!root) return 0;

	let total = 0;

	const helper = node => {
		// only adds if left leaf
		if (node.left && (!node.left.left && !node.left.right)) {
			total += node.left.val;
		}

		// traverse if non null node
		node.left && helper(node.left);
		node.right && helper(node.right);
	};

	helper(root);

	return total;
};

// without global total var
const sumOfLeftLeaves = root => {
	// edge case
	if (!root) return 0;
	if (!root.left && !root.right) return 0;

	// base case
	if (root.left && (!root.left.left && !root.left.right)) {
		return root.left.val + sumOfLeftLeaves(root.right); // must check right still
	}

	return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
