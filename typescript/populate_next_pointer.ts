function connect(root: Node | null): Node | null {
	// perform level order traversal, then connect each node of a level
	let levels = []
	helper(root, 0, levels)

	// connect next pointers
	levels.forEach(level => {
		for (let i = 0; i < level.length - 1; i++) {
			level[i].next = level[i + 1]
		}
	})

	return root
}

function helper(node: TreeNode, level: number, levels: TreeNode[][]) {
	// base case
	if (node == null) return

	// create new level arr if doesn't exist
	if (level >= levels.length) {
		levels.push([])
	}

	// append node to respective level array
	levels[level].push(node)

	// traverse preorder
	helper(node.left, level + 1, levels)
	helper(node.right, level + 1, levels)
}
