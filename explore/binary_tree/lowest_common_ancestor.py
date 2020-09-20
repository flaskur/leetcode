# Given a binary tree, find the lowest common ancestor of two given nodes of a tree. Basically find the node where both nodes came from, but ancestor can be the node itself.
# Idea behind this is to recursive traverse left and right until we find p or q, then we return showing that we found a candidate. If one side cannot find a value, we recursively move down the other subtree that has the values. Repeat.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
	def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
		if not root:
			return root

		if root == p or root == q:
			return root

		left = self.lowestCommonAncestor(root.left, p, q)
		right = self.lowestCommonAncestor(root.right, p, q)

		if left and right:
			return root
		elif not left:
			return right
		elif not right:
			return left


		