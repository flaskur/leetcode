/**
 * Given the root node of a binary search tree, return the sum value of all nodes with values between L and R inclusive.
 * The BST has unique values for each node.
 * 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = (root, L, R) => {
	if (root === null) return 0;
	if (root.val < L) {
		return rangeSumBST(root.right, L, R);
	}
	if (root.val > R) {
		return rangeSumBST(root.left, L, R);
	}
	return root.val + rangeSumBST(root.right, L, R) + rangeSumBST(root.left, L, R);
};
