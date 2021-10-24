function rightSideView(root: TreeNode | null): number[] {
	let view = []
	helper(root, 0, view)
	return view
}

function helper(node: TreeNode, level: number, view: number[]) {
	// base case
	if (node == null) return

	// first occurrence right level
	if (level >= view.length) {
		view.push(node.val)
	}

	// dfs right side first
	helper(node.right, level + 1, view)
	helper(node.left, level + 1, view)
}
