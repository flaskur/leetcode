func inorderTraversal(root *TreeNode) []int {
	order := []int{}
	helper(root, &order)
	return order
}

func helper(node *TreeNode, order *[]int) {
	// base case
	if node == nil {
		return
	}

	// traverse left
	helper(node.Left, order)
	// add node
	*order = append(*order, node.Val)
	// traverse right
	helper(node.Right, order)
}