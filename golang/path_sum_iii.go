func pathSum(root *TreeNode, targetSum int) int {
	if root == nil {
		return 0
	}

	paths := 0
	helper(root, targetSum, root.Val, 1, &paths)
	return paths
}

func helper(node *TreeNode, targetSum int, currentSum int, length int, paths *int) {
	// base case
	if node == nil {
		return
	}

	// found path
	if currentSum == targetSum {
		(*paths)++
		// don't return here
	}

	// doesn't this mean base case never triggers?
	if node.Left != nil {
		helper(node.Left, targetSum, currentSum+node.Left.Val, length+1, paths)
		// only reset if single node to avoid duplicates
		if length == 1 {
			helper(node.Left, targetSum, node.Left.Val, 1, paths)
		}
	}
	if node.Right != nil {
		helper(node.Right, targetSum, currentSum+node.Right.Val, length+1, paths)
		if length == 1 {
			helper(node.Right, targetSum, node.Right.Val, 1, paths)
		}
	}
}