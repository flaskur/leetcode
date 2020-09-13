# Given a binary tree, find its maximum depth using recursion.
# You effectively need to go done every possible traversal and count along the way, then update a global variable that takes the max of all traversals.
# class TreeNode:
# 	def __init__(self, val=0, left=None, right=None):
# 		self.val = val
# 		self.left = left
# 		self.right = right
class Solution:
	def maxDepth(self, root: TreeNode) -> int:
		def helper(node: TreeNode, steps: int) -> None:
			# edge case
			if not node:
				return 0
			
			# base case is no more children
			if not node.left and not node.right:
				return steps

			# otherwise move inwards into both tree paths
			if node.left and node.right:
				return max(helper(node.left, steps + 1), helper(node.right, steps + 1))
			if node.left:
				return helper(node.left, steps + 1)
			if node.right:
				return helper(node.right, steps + 1)

		return helper(root, 1)

# Closures in python don't seem to work because it doesn't recognize the variable in the immediate upper scope.
# Perhaps the nonlocal keyword would affect it, but I haven't tried it.
# Without closures you are forced to return the value instead of updating a global and returning that, which can make the logic a lot more difficult.