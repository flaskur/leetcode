/**
 * Given a binary search tree, find the lowest common ancestor of two given nodes.
 * Idea is to continue to move node until one node on each sub tree. If they are both on one subtree, move node down.
 * The base case is finding one of the node values be the same as the current node. The other base case is that you found one on each side. So you should return a boolean?
 * 
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
	// edge case
	if (!root) {
		return root;
	}

	const helper = (node) => {
		// failed to find the value in subtree, so left/right found should be null
		if (!node) {
			return null;
		}

		// base case
		if (node.val === p.val || node.val === q.val) {
			return node;
		}

		// traverse down both left and right subtree to see if the value exists in that path
		let leftFound = helper(node.left);
		let rightFound = helper(node.right);

		if (leftFound && rightFound) {
			return node;
		} else if (leftFound) {
			// both are in left subtree, move left
			return helper(node.left);
		} else if (rightFound) {
			// both are in right subtree, move right
			return helper(node.right);
		}
	};

	return helper(root);
};
