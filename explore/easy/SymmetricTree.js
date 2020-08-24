/**
 * Given a binary tree, check if it is symmetrical. Meaning a mirror of itself around its center.
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
	if (root === null) {
		console.log('empty tree return true');
		return true;
	}

	return isSymmetricHelper(root.left, root.right);
};

const isSymmetricHelper = function(leftNode, rightNode) {
	if (leftNode === null || rightNode === null) {
		console.log('if one is null, then the other on opposite branch must be null to pass as symmetric.');
		return leftNode === rightNode;
	}
	if (leftNode.val !== rightNode.val) return false;

	// Recursive step uses symmetry.
	return isSymmetricHelper(leftNode.left, rightNode.right) && isSymmetricHelper(leftNode.right, rightNode.left);
};

// A binary tree can only be symmetrical if for the left subtree left child is equal to the right subtree right child and the left subtree right child is equal to the right subtree left child. The base case is when you encounter a null node, in which case the other must be null to be correct. Also notice that since we are working with two branches, we use && so that both branches must evaluate to true.
