/**
 * Given preorder and inorder traversal of a tree, construct the binary tree. Remember that preorder middle left right and inorder left middle right. You can assume no duplicates exist in the tree.
 * Preorder implies that preorder[0] is always the root. We can use this fact to find where the root is in the inorder. Since inorder is structured as left, middle, right -> everything to the left of it is a left child.
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
	// Hash the index of the inorder numbers.
	let inorderHash = {};

	inorder.forEach((num, index) => {
		// Do I know that all the numbers are unique?
		inorderHash[num] = index;
	});

	let root = helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inorderHash);

	return root;
};

const helper = function(preorder, preStart, preEnd, inorder, inStart, inEnd, inorderHash) {
	// Base case.
	if (preStart > preEnd || inStart > inEnd) return null;

	// In the beginning, root must be preorder[preStart].
	let root = new TreeNode(preorder[preStart]);
	// Index of the root in the inorder array.
	let inRoot = inorderHash[root.val];
	let numsLeft = inRoot - preStart;

	root.left = helper(preorder, preStart + 1, preStart + numsLeft, inorder, inStart, inRoot - 1, inorderHash);
	root.right = helper(preorder, preStart + numsLeft + 1, preEnd, inorder, inRoot + 1, inEnd, inorderHash);

	return root;
};
// Not figuring this one out. Not worth spending so much time on. Move on.
