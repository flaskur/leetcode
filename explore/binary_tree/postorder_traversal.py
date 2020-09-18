# Given the root of a binary tree, return the post order traversal of the nodes' values
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def postorderTraversal(self, root: TreeNode) -> List[int]:
		# edge case
		if not root:
			return []

		result = []

		# notice here that instead of using a global var an editing, we can return the list by including it as an argument
		# after traversing left and right, it will add to the result then return, but remember the deeper nodes finish first which is exactly what we want
		def helper(node: TreeNode, result: List[int]) -> List[int]:
			if not node:
				return 

			helper(node.left, result)
			helper(node.right, result)

			result.append(node.val)

			return result

		return helper(root, result)
			