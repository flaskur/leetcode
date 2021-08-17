func tree2str(root *TreeNode) string {
	if root == nil {
		return ""
	}

	result := strconv.Itoa(root.Val)

	left := tree2str(root.Left)
	right := tree2str(root.Right)

	if left == "" && right == "" {
		return result
	} else if left == "" {
		return fmt.Sprintf("%v()(%v)", result, right)
	} else if right == "" {
		return fmt.Sprintf("%v(%v)", result, left)
	} else {
		return fmt.Sprintf("%v(%v)(%v)", result, left, right)
	}
}


