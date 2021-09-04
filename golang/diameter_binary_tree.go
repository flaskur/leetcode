func diameterOfBinaryTree(root *TreeNode) int {
	// diameter does not necessarily have to pass through root
	// diameter passing through a particular node is the max depth of both children
	maxDiameter := 0
	helper(root, &maxDiameter)
	return maxDiameter
}

func helper(node *TreeNode, maxDiameter *int) {
	if node == nil {
		return
	}

	diameter := findDepth(node.Left, 0) + findDepth(node.Right, 0)
	*maxDiameter = max(*maxDiameter, diameter)
	helper(node.Left, maxDiameter)
	helper(node.Right, maxDiameter)
}

func findDepth(node *TreeNode, depth int) int {
	if node == nil {
		return depth
	}

	return max(findDepth(node.Left, depth+1), findDepth(node.Right, depth+1))
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}