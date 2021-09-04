func invertTree(root *TreeNode) *TreeNode {
	// base case
	if root == nil {
		return root
	}

	root.Left, root.Right = root.Right, root.Left
	invertTree(root.Left)
	invertTree(root.Right)

	return root
}

// iterative
func invertTree(root *TreeNode) *TreeNode {
	// base case
	if root == nil {
		return nil
	}

	stack := []*TreeNode{}
	stack = append(stack, root)
	for len(stack) > 0 {
		// pop
		current := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		// invert
		current.Left, current.Right = current.Right, current.Left

		// push children to stack
		if current.Left != nil {
			stack = append(stack, current.Left)
		}
		if current.Right != nil {
			stack = append(stack, current.Right)
		}
	}

	return root
}