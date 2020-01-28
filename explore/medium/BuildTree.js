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
	return helper(0, 0, inorder.length - 1, preorder, inorder);
};

const helper = function(preStart, inStart, inEnd, preorder, inorder) {
	if (preStart > preorder.length - 1 || inStart > inEnd) return null;

	let root = new TreeNode(preorder[preStart]);
	let rootIndex = 0;
	for (let i = inStart; i <= inEnd; i++) {
		if (inorder[i] === root.val) {
			rootIndex = i;
			break;
		}
	}

	root.left = helper(preStart + 1, inStart, rootIndex - 1, preorder, inorder);
	root.right = helper(preStart + rootIndex - inStart + 1, rootIndex + 1, inEnd, preorder, inorder);
	return root;
};

// I really don't understand this too well at the moment. I will look back at this later.
