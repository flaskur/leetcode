/**
 * Given two binary search trees, we want to merge them together such that the nodes that overlap will add in value. For instance if the root for the tree1 is 2 and root for tree 2 is 6, then the merged tree will have a root value of 8. If it doesn't exist for one, assume the nonempty node.
 * @param {TreeNode} t1 first tree root node, then current node for recursion.
 * @param {TreeNode} t2 second tree root node, then current node for recursion.
 * @return {TreeNode} returns the root of the merged tree
 */
const mergeTrees = function(t1, t2) {
	// If both trees do not exists, return null.
	if (!t1 && !t2) return null;

	// If only one of the trees exists...
	if (!t1 || !t2) {
		// a null tree is automatically a falsey value which is evaluated in this or logic.
		return t1 || t2;
	}

	// Set the root node instance with the
	let root = new TreeNode(t1.val + t2.val);

	// Recursively assigning the values of all available spaces.
	root.left = mergeTrees(t1.left, t2.left);
	root.right = mergeTrees(t1.right, t2.right);

	return root;
};

// Rewrite for memory.

const mergeTrees = function(t1, t2) {
	// In the case where both tree nodes do not exist, return null.
	if (!t1 && !t2) return null;

	// If only one of the tree nodes exists, takes the one that exists
	if (!t1 || !t2) return t1 || t2;

	// If they both exists, then we want to create a new tree node that has the combined value of both nodes.
	let treeNode = new TreeNode(t1.val + t2.val);

	// Now we branch from this treeNode using a recursive step to merge the trees.
	treeNode.left = mergeTrees(t1.left, t2.left);
	treeNode.right = mergeTrees(t1.right, t2.right);

	return treeNode; // We return the root node of the new tree.
};
