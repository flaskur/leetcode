/**
 * Invert a binary tree.
 * It looks like each step is setting right child to left and left child to right. Definitely should return a node each time. Base case should be when node is undefined.
 */
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

const invertTree = (root: TreeNode | null): TreeNode | null => {
	// edge case
	if (!root) {
		return null;
	}

	const helper = (node: TreeNode | null): TreeNode | null => {
		// base case
		if (!node) {
			return node;
		}

		// overwritten side, so have to save reference
		let temp = node.left;

		node.left = helper(node.right);
		node.right = helper(temp);

		return node;
	};

	return helper(root);
};
