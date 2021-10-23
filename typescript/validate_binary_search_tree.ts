function isValidBST(root: TreeNode | null): boolean {
	// check that both left and right subtrees are valid
	return (
		helper(root.left, Number.NEGATIVE_INFINITY, root.val) && helper(root.right, root.val, Number.POSITIVE_INFINITY)
	)
}

function helper(node: TreeNode, min: number, max: number): boolean {
	// base case
	if (node == null) return true

	// validate that bounds are correct
	if (node.val <= min || node.val >= max) return false

	// both subtrees must be valid with new min max
	return helper(node.left, min, node.val) && helper(node.right, node.val, max)
}
