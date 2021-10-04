func rightSideView(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	levels := map[int][]int{}

	helper(root, 1, levels)

	// right side view is just last element of each level
	view := []int{}
	for level := 1; level <= len(levels); level++ {
		vals := levels[level]
		view = append(view, vals[len(vals)-1])
	}

	return view
}

func helper(node *TreeNode, level int, levels map[int][]int) {
	// dfs but we keep track of level and add to levels map
	if node == nil {
		return
	}

	levels[level] = append(levels[level], node.Val)
	helper(node.Left, level+1, levels)
	helper(node.Right, level+1, levels)
}