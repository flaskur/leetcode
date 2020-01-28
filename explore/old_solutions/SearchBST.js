/**
 * We want to check if a node exists inside of a specific tree, given the root tree node. The node declaration has instance variables of val, left, and right.
 * @param {TreeNode} root is the given root of the tree.
 * @param {number} val is the target value that we want to find inside of the binary search tree.
 * @return {TreeNode} return the actual node with the found value, or return null if you can't find it.
 * // Most obvious solution is to use recursive traversal and check if the current node matches.
 */
const searchBST = function(root, val) {
	if (!root) {
		return null;
	}
	if (root.val === val) {
		return root;
	}
	if (root.val > val) {
		return searchBST(root.left, val);
	} else {
		return searchBST(root.right, val);
	}
};

// This problem was stupid. The syntax required you to use an empty array on end case, but fails to compile when done so. The normal case of returning null works.
