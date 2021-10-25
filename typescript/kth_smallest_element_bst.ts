function kthSmallest(root: TreeNode | null, k: number): number {
	// sorted order can be found using inorder traversal left parent right dfs
	// keep a count and terminate early if count k already reached

	let smallest: number

	const helper = (node: TreeNode, count: number, k: number): number => {
		// base case
		if (node == null || count > k) return count

		// dfs inorder => update count
		count = helper(node.left, count, k)
		count++
		if (count == k) {
			smallest = node.val
		}
		count = helper(node.right, count, k)

		return count
	}
	helper(root, 0, k)

	return smallest
}
