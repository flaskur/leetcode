# Given the root of a binary tree, return the inorder traversal of its values
# class TreeNode:
# 	def __init__(self, val=0, left=None, right=None):
# 		self.val = val
# 		self.left = left
# 		self.right = right
class Solution:
	def inorderTraversal(self, root: TreeNode) -> List[int]:
		if not root:
			return []

		result = []
		
		def helper(node: TreeNode) -> None:
			if not node:
				return

			if node.left:
				helper(node.left)
				
			result.append(node.val)

			if node.right:
				helper(node.right)

		helper(root)

		return result