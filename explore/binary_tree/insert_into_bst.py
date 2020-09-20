# Given the root node of a binary search tree and value to be inserted into a tree, insert into the bst. Value guaranteed not to exist in the bst.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
		if not root:
			root = TreeNode(val)
			return root

		def helper(node: TreeNode, val: int) -> None:
			if not node.left and val < node.val:
				new_node = TreeNode(val)
				node.left = new_node
				return
			elif not node.right and val > node.val:
				new_node = TreeNode(val)
				node.right = new_node
				return

			if node.left and val < node.val:
				return helper(node.left, val)
			elif node.right and val > node.val:
				return helper(node.right, val)

		helper(root, val)

		return root