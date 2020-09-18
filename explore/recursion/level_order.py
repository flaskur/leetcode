# Given a binary tree, return the level order traversal of its node values.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def levelOrder(self, root: TreeNode) -> List[List[int]]:
		# base case
		if not root:
			return []

		result = []

		hash_map = {}

		# you need a way to separate levels, so we keep track of row during recursion to populate a hash map that we iterate over later for the result
		def helper(node: TreeNode, row: int) -> None:
			if not node:
				return

			# populate a hash map with keys as the row numbers and vals as the lists
			if row not in hash_map:
				hash_map[row] = [node.val]
			else:
				hash_map[row].append(node.val)
			
			helper(node.left, row + 1)
			helper(node.right, row + 1)

		helper(root, 1)

		for key, value in hash_map.items():
			result.append(value)

		return result