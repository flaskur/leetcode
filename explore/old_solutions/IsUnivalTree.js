/**
 * Given ta tree root, we need to determine whether or not the tree is univalued, meaning that all the nodes in the tree have the same value.
 * Given the root, we should do a recursive step until the root found is null.
 * @param {TreeNode} root is the given root of the tree
 * @return {boolean} returns true or false depending on whether or not the tree is univalued.
 */
// const isUnivalTree = function(root) {
// 	// Empty tree, return false.
// 	if (!root) return false;

// 	let univalue = root.val;

// 	const traverseTree = function(node) {
// 		if (node === null) {
// 			console.log(`don't return on node null`);
// 		} else if (node.val === univalue) {
// 			traverseTree(node.left);
// 			traverseTree(node.right);
// 		} else {
// 			// When value of node doesn't match...
// 			return false;
// 		}
// 	};

// 	traverseTree(root);
// 	return true;
// };

// Discussion
const isUnivalTree = function(root) {
	const helper = function(node, val) {
		if (node === null) return true;

		// So the idea here is that both ends have to return true for the tree to be univalue, which is why we have a && conditional.
		return node.val !== val ? false : helper(node.left, val) && helper(node.right, val);
	};

	return helper(root, root.val);
};
