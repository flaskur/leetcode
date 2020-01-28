/**
 * Given a binary tree, find its maximum depth which is the longest distance to leaf starting from root.
 */
const maxDepth = function(root) {
	// I would probably want do do a recursive function that explores both paths and adds 1 for each traversal, then max both of them. I remember that I did a +1 method and 0 on the base case when the current node is null. I'm pretty sure I could use the function itself too.
	if (root === null) return 0;
	let left = 1 + maxDepth(root.left);
	let right = 1 + maxDepth(root.right);

	return Math.max(left, right);
};

// The max depth is distance from the lowest leaf to the root and it is equivalent to the max height. In this problem you basically recursively add the edge lengths of the left and right paths. We use a max function to specify the max depth. This is a form of a depth first search using recursion.
