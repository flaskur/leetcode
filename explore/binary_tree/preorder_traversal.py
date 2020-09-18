# Given a binary tree, return the preorder traversal of its nodes' values.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def preorderTraversal(self, root: TreeNode) -> List[int]:
		if not root:
			return []

		result = []

		def helper(node: TreeNode) -> List[int]:
			if not node:
				return

			result.append(node.val)

			if node.left:
				helper(node.left)
			if node.right:
				helper(node.right)

		helper(root)

		return result

	# iterative
	def preorderTraversal(self, root: TreeNode) -> List[int]:
		if not root:
			return []

		result = []
		queue = []

		queue.append(root)

		while queue:
			node = queue.pop(0)
			result.append(node.val)

			if node.right:
				queue.insert(0, node.right)
			if node.left:
				queue.insert(0, node.left)

		return result

		