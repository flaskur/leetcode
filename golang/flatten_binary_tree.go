func flatten(root *TreeNode) {
	helper(root)
}

func helper(node *TreeNode) *TreeNode {
	// base case
	if node == nil {
		return nil
	}

	// find right first bc overwrite
	right := helper(node.Right)

	node.Right = helper(node.Left)
	node.Left = nil // remove left branch
	current := node
	for current.Right != nil {
		current = current.Right
	}
	current.Right = right

	return node
}