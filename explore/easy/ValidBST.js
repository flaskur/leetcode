/**
 * Given a binary tree, determine if it's a valid BST. A BST just means that for all nodes, the left child val is less and the right child val is greater than the particular node.
 * So, you'll have to go through each node and do a check on the val, and if it passes all the recursive steps, then return true.
 * By that nature of having to pass everything, THEN return true, you'll probably need to define the recursive function inside the normal function.
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
	return validBST(root, -Infinity, Infinity);

	// if (root === null) {
	// 	console.log('empty tree is BST');
	// 	return true;
	// }

	// const traverse = function(currentNode) {
	// 	if (currentNode.left === null && currentNode.right === null) return true;

	// 	if (currentNode.left !== null) {
	// 		if (currentNode.val < currentNode.left.val) {
	// 			console.log(`${currentNode.val} less than ${currentNode.left.val}`);
	// 			return false;
	// 		}
	// 		console.log('going left');
	// 		return traverse(currentNode.left);
	// 	} else if (currentNode.right !== null) {
	// 		if (currentNode.val > currentNode.right.val) {
	// 			console.log(`${currentNode.val} greater than ${currentNode.right.val}`);
	// 			return false;
	// 		}
	// 		console.log('going right');
	// 		return traverse(currentNode.right);
	// 	}

	// };

	// let result = traverse(root);
	// console.log('result is', result);
	// if (result === false) return false;

	// return true;
};

const validBST = function(currentNode, min, max) {
	if (currentNode === null) return true;

	if (currentNode.val <= min || currentNode.val >= max) return false;

	return validBST(currentNode.left, min, currentNode.val) && validBST(currentNode.right, currentNode.val, max);
};

// This solution uses a method that keeps track of max and min values. This also shows how you'll likely need to use a helper function in the same global context as the one running it. The purpose is to have arguments that adapt for each recursive call. The idea behind this is that anything in the left subtree of the current node cannot be more than the current node itself. Likewise anything in the right subtree cannot be less than the current node either. This helper function takes advantage of that by setting the min or max to the current node value and checking for failure or end case of null.
