function flatten(root: TreeNode | null): void {
	helper(root)
}

function helper(node: TreeNode): TreeNode {
	// base case
	if (node == null) return null

	// save right side, overwrite with left subtree
	let right = helper(node.right)
	node.right = helper(node.left)

	// cutoff left subtree
	node.left = null

	// traverse right side, attach to end
	let current = node
	while (current.right != null) {
		current = current.right
	}
	current.right = right

	return node
}
