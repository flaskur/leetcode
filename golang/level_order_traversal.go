// given root of a binary tree, return the level order traversal of its nodes' values.
// the key here is that you need to pass level and levels ref to helper recursion, then perform dfs and add based on level.
func levelOrder(root *TreeNode) [][]int {
	levels := [][]int{}
	helper(root, 1, &levels) // populates levels
	return levels
}

func helper(node *TreeNode, level int, levels *[][]int) {
	if node == nil {
		return
	}

	// create row for levels if it doesn't already exist
	if len(*levels) < level {
		row := []int{}
		*levels = append(*levels, row)
	}

	// add node value to current level
	(*levels)[level-1] = append((*levels)[level-1], node.Val)

	// move to next level
	helper(node.Left, level+1, levels)
	helper(node.Right, level+1, levels)
}