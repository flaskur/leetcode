// given the root a binary tree, check if it is a mirror of itself.
// important part here is that you need to compare mirrors by doing left.Left/right.Right && left.Right/right.Left.
func isSymmetric(root *TreeNode) bool {
	return helper(root.Left, root.Right)
}

func helper(left *TreeNode, right *TreeNode) bool {
	// base case, both must be nil to mirror
	if left == nil || right == nil {
		return left == right
	}

	// failure case
	if left.Val != right.Val {
		return false
	}

	// otherwise move down the tree and check mirrors
	return helper(left.Left, right.Right) && helper(left.Right, right.Left)
}