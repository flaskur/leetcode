# Given a binary tree, determine if it is a valid binary search tree recursively.
# class TreeNode:
# 	def __init__(self, val=0, left=None, right=None):
# 		self.val = val
# 		self.left = left
# 		self.right = right
class Solution:
	def isValidBST(self, root: TreeNode) -> bool:
		if not root:
			return True
		
		if not root.left and not root.right:
			return True
		
		def helper(node: TreeNode, min: int, max: int) -> bool:
			# print(node.val, min, max)
			# edge case
			if not node:
				return True

			if min:
				if node.val <= min:
					return False

			if max:
				if node.val >= max:
					return False

			# base case
			if not node.left and not node.right:
				return True


			# checking value qualifiers, notice that it must be strictly less than, not equal
			if node.left:
				if node.val <= node.left.val:
					return False

			if node.right:
				if node.val >= node.right.val:
					return False

			# if either side is false, whole thing must be invalid
			# everything to the left must have max of the current node val, everything to the right must have min as the current node val
			return helper(node.left, min, node.val) and helper(node.right, node.val, max)

		return helper(root, None, None)

# Bunch of weird edge cases. Main concept though is that you continue progress and if the children fail the value check return false.
# The other case I didn't consider was the min max, so be aware that everything to left must be less, everything to right must be greater.