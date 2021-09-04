func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	// don't overthink it, base case makes it easier to understand
	if root1 == nil {
		return root2
	}
	if root2 == nil {
		return root1
	}

	node := TreeNode{
		Val:   root1.Val + root2.Val,
		Left:  mergeTrees(root1.Left, root2.Left),
		Right: mergeTrees(root1.Right, root2.Right),
	}

	return &node
}