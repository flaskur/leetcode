func rob(root *TreeNode) int {
	memo := map[*TreeNode]int{}
	return helper(root, memo)
}

func helper(node *TreeNode, memo map[*TreeNode]int) int {
	// base case
	if node == nil {
		return 0
	}

	// check memo if you've already seen node
	if v, ok := memo[node]; ok {
		return v
	}

	// calculate grandchildren value --> skip direct line
	val := 0
	if node.Left != nil {
		val += helper(node.Left.Left, memo) + helper(node.Left.Right, memo)
	}
	if node.Right != nil {
		val += helper(node.Right.Left, memo) + helper(node.Right.Right, memo)
	}

	// set memo for node
	val = max(node.Val+val, helper(node.Left, memo)+helper(node.Right, memo))
	memo[node] = val

	return val
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}