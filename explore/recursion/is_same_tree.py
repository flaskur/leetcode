# Given two binary trees, write a function to check if they are the same or not. 
# I would perform a DFS or BFS search on each tree and then compare the arrays. Use an intermediate array to represent the function call stack.
# class TreeNode:
# 	def __init__(self, val=0, left=None, right=None):
# 		self.val = val
# 		self.left = left
# 		self.right = right
class Solution:
	def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
		if not p and not q:
			return True
		if not p and q:
			return False
		if not q and p:
			return False

		if p.val != q.val:
			return False

		return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
		
		