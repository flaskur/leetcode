// given the root of a binary tree, determine if it's a valid binary search tree.
// important part here is that you need to use a helper method and set min/max bounds. also be aware of overflow issues.
func isValidBST(root *TreeNode) bool {
	return helper(root.Left, math.MinInt64, root.Val) && helper(root.Right, root.Val, math.MaxInt64)
}

func helper(node *TreeNode, min int, max int) bool {
	// base case
	if node == nil {
		return true
	}

	// check that current node fulfills min/max bounds
	if node.Val >= max || node.Val <= min {
		return false
	}

	// check that children values pass
	if node.Left != nil && node.Left.Val >= node.Val {
		return false
	}
	if node.Right != nil && node.Right.Val <= node.Val {
		return false
	}

	// both left and right subtree need to be valid
	return helper(node.Left, min, node.Val) && helper(node.Right, node.Val, max)
}