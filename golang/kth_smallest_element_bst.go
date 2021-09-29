func kthSmallest(root *TreeNode, k int) int {
	// a bst guarantees that all left children are less than and all right children are greater than the parent node
	// the most straightforward way would be to populate an array using dfs or bst, sort it, then get it by index, but that's not really efficient
	// don't know size of tree so you cannot use binary search
	// you need information about all the nodes because you don't know kth smallest without the idea of the entire tree
	// since we are searching for smallest, we can dfs with a count
	// perform dfs which automatically prioritizes least to greatest

	result, count := -1, 0
	helper(root, k, &count, &result)
	return result
}

func helper(node *TreeNode, k int, count *int, result *int) {
	// base case
	if node == nil {
		return
	}
	// already found kth smallest
	if (*count) >= k {
		return
	}

	// traverse down left to start with min value
	helper(node.Left, k, count, result)

	// increment count -> if kth smallest, set result and stop
	(*count)++
	if *count == k {
		*result = node.Val
		return
	}

	// traverse right
	helper(node.Right, k, count, result)
}