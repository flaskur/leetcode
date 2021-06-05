// given the root of a binary tree, return its max depth.
// recursively move down each branch and return max of each branch path.
func maxDepth(root *TreeNode) int {
	// base case
	if root == nil {
		return 0
	}

	return 1 + max(maxDepth(root.Left), maxDepth(root.Right))
}

func max(x int, y int) int {
	if x >= y {
		return x
	}
	return y
}