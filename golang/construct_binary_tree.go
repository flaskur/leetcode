func buildTree(preorder []int, inorder []int) *TreeNode {
	return helper(preorder, inorder, 0, 0, len(inorder)-1)
}

func helper(preorder, inorder []int, pre, start, end int) *TreeNode {
	// base case
	if start > end || pre >= len(preorder) {
		return nil
	}

	root := &TreeNode{Val: preorder[pre]}

	// find index inside of inorder
	var pivot int
	for i := start; i <= end; i++ {
		if root.Val == inorder[i] {
			pivot = i
		}
	}

	// next root candidates are determined from current pre index + offset, left always pre+1, right considers offset of left elements from inorder pivot
	// offset right for new head by num elements to left of pivot
	offset := pivot - start
	root.Left = helper(preorder, inorder, pre+1, start, pivot-1)
	root.Right = helper(preorder, inorder, pre+offset+1, pivot+1, end)

	return root
}