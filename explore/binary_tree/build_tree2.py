# Given preorder and inorder traversal of a tree, construct the binary tree.
# The starting root should be the first element.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
		if not preorder or not inorder:
			return None

		def helper(preorder: List[int], inorder: List[int]) -> TreeNode:
			if not preorder or not inorder:
				return None

			index = inorder.index(preorder.pop(0))
			root = TreeNode(inorder[index])

			# should be left this time for determining root because preorder is root left right
			root.left = helper(preorder, inorder[:index])
			root.right = helper(preorder, inorder[index+1:])

			return root

		return helper(preorder, inorder)