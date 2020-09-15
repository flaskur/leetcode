# Given an integer n, generate all structurally unique bst that store values 1 to n.
# You probably need a outer for loop. No idea how to do this.
# class TreeNode:
# 	def __init__(self, val=0, left=None, right=None):
# 		self.val = val
# 		self.left = left
# 		self.right = right
class Solution:
	def generateTrees(self, n: int) -> List[TreeNode]:
		if n == 0:
			return [[]]
		
		def helper(start: int, end: int) -> List[TreeNode]:
			trees = []

			if start < end:
				trees.append(None)
				return trees

			if start == end:
				trees.add(TreeNode(start))
				return trees

			left = []
			right = []
			for i in range(start, end + 1):
				left = helper(start, i - 1)
				right = helper(i + 1, end)

				for current_left in left:
					for current_right in right:
						root = TreeNode(i)
						root.left = current_left
						root.right = current_right
						trees.append(root)

			return trees

		return helper(1, n)