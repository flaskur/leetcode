# Given inorder and postorder traversal of a tree, construct the binary tree.
# The last element in postorder should be root. Split into two subtrees and I think you select the root by referencing the first occurence in reverse order in postorder list, which is likely why we had an end pointer
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
		if not inorder or not postorder:
			return None

		def helper(inorder: List[int], postorder: List[int]) -> TreeNode:
			# base case 
			if not inorder or not postorder:
				return None

			index = inorder.index(postorder.pop())
			root = TreeNode(inorder[index])

			# traverse right first so that postorder can just pop end
			root.right = helper(inorder[index+1:], postorder)
			root.left = helper(inorder[:index], postorder)

			return root

		return helper(inorder, postorder)
		