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

// iterative
func inorderTraversal(root *TreeNode) []int {
	order := []int{}
	stack := []*TreeNode{}

	current := root
	for current != nil || len(stack) > 0 {
		for current != nil {
			stack = append(stack, current) // hold node pointers
			current = current.Left
		}

		// pop stack
		current = stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		order = append(order, current.Val)
		current = current.Right
	}

	return order
}