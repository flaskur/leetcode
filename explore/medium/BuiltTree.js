/**
 * Given preorder and inorder traversal of a tree, construct the binary tree. Remember that preorder middle left right and inorder left middle right. You can assume no duplicates exist in the tree.
 * What about null case?
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
	// Edge case empty tree.
	if (preorder.length === 0) return null;

	// Can't I just follow preorder?
};
