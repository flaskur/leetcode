func binaryTreePaths(root *TreeNode) []string {
	paths := []string{}
	helper(root, strconv.Itoa(root.Val), &paths)
	return paths
}

func helper(node *TreeNode, current string, paths *[]string) {
	// base case
	if node.Left == nil && node.Right == nil {
		*paths = append(*paths, current)
	}

	// traverse path and build current string
	if node.Left != nil {
		helper(node.Left, fmt.Sprintf("%v->%v", current, node.Left.Val), paths)
	}
	if node.Right != nil {
		helper(node.Right, fmt.Sprintf("%v->%v", current, node.Right.Val), paths)
	}
}