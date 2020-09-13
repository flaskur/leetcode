# Given the root node of a bst and a value, find the node of that bst.
# So if you were doing this iteratively you would perform a depth first search and traverse down the path based on current node value. Recursive should be the same.
# class TreeNode:
# 	def __init__(self, val=0, left=None, right=None):
# 		self.val = val
# 		self.left = left
# 		self.right = right
class Solution:
	def searchBST(self, root: TreeNode, val: int) -> TreeNode:
		def helper(node: TreeNode) -> TreeNode:
			# edge case empty tree
			if not node:
				return None
			
			# print(node.val)

			# base case we find the value
			if node.val == val:
				return node

			# otherwise traverse by recursively calling the next tree node
			# assuming that left strictly less and right strictly greater than
			if val < node.val:
				return helper(node.left)
			elif val > node.val:
				return helper(node.right)

		return helper(root)