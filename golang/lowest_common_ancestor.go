func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	// the ancestor can be itself meaning the recursive step should consider current as a valid answer
	// generally you should think of doing a basic DFS down left and right child until you find both p and q
	// p and q are guaranteed to exist if ancestor is root, so the decision should be to see which child has the ancestors
	// when both the left and right children have ancestors, then that would be the lowest common ancestor
	// if they are on the same branch, it would imply that there is a lower common ancestor
	// so check left and right, of only 1 is valid then keep going down that branch
	// if both are valid, immediately you know this node is the answer
	// weird case is if the node is current, which means if only 1 branch works and current is either p or q, then you found answer, otherwise go down branch

	memo := map[*TreeNode]*TreeNode{}
	return helper(root, p, q, memo)
}

func helper(node, p, q *TreeNode, memo map[*TreeNode]*TreeNode) *TreeNode {
	// base case
	if node == nil {
		return nil
	}
	if node == p || node == q {
		return node
	}

	// check memo if we've already seen/calculated node
	if mem, ok := memo[node]; ok {
		return mem
	}

	left := helper(node.Left, p, q, memo)
	right := helper(node.Right, p, q, memo)

	var result *TreeNode
	// p and q are in both branches, already LCA
	if left != nil && right != nil {
		result = node
	} else if node == p || node == q {
		// LCA includes current --> don't need to check branches bc it must exist
		result = node
	} else if left != nil {
		// both p and q are down left branch
		result = helper(node.Left, p, q, memo)
	} else if right != nil {
		// both p and q are down right branch
		result = helper(node.Right, p, q, memo)
	} else {
		// both branches are nil --> deadend
		result = nil
	}

	memo[node] = result

	return result
}