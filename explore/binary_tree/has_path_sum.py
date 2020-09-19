# Given a binary tree and a sum, determine if the tree has root to leaf path such that adding values equal given sum. Notice that it must be to a leaf, not intermediate.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def hasPathSum(self, root: TreeNode, sum: int) -> bool:
		if not root:
			return False

		def helper(node: TreeNode, sum: int, current_sum: int) -> bool:
			# base case
			if not node.left and not node.right:
				# add leaf value
				current_sum += node.val
				
				if sum == current_sum:
					return True
				else:
					return False

			if node.left and node.right:
				return helper(node.left, sum, current_sum + node.val) or helper(node.right, sum, current_sum + node.val)
			if node.left:
				return helper(node.left, sum, current_sum + node.val)
			if node.right:
				return helper(node.right, sum, current_sum + node.val)

		return helper(root, sum, 0)