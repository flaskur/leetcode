# Given a binary tree, check whether it is a mirror of itself.
# You could implement it the same way as level order traversal and check if reversed arrays are the same. Actually no that doesn't work because it doesn't keep track of placement of null. It would work if we use a placeholder.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def isSymmetric(self, root: TreeNode) -> bool:
		# edge case
		if not root:
			return True

		level_map = {}

		def helper(node: TreeNode, row: int) -> None:
			# base case
			if not node:
				if row in level_map:
					level_map[row].append(-1)
				else:
					level_map[row] = [-1]
				return

			if row in level_map:
				level_map[row].append(node.val)
			else:
				level_map[row] = [node.val]

			helper(node.left, row + 1)
			helper(node.right, row + 1)

		helper(root, 1)

		for level in level_map.values():
			# print(level)
			if level[::-1] != level[:]:
				return False

		return True

		