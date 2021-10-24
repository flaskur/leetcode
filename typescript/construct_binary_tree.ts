function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	// preorder is parent left right, inorder is left parent right
	// root is guaranteed to be first value of preorder
	// find root as the pivot inside inorder => find left/right head from offset
	return helper(preorder, inorder, 0, 0, inorder.length - 1)
}

function helper(preorder: number[], inorder: number[], pre: number, start: number, end: number): TreeNode {
	// base case
	if (start > end) {
		return null // marks child as null
	}

	// find the pivot and offset
	let root = preorder[pre]
	let pivot = 0
	for (let i = start; i <= end; i++) {
		if (inorder[i] == root) {
			pivot = i
			break
		}
	}
	let offset = pivot - start + 1 // represents number of elements in left subtree => used to find right head

	// define node
	let node = new TreeNode(root, null, null)
	node.left = helper(preorder, inorder, pre + 1, start, pivot - 1)
	node.right = helper(preorder, inorder, pre + offset, pivot + 1, end)

	return node
}
