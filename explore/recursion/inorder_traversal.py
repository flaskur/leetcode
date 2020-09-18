# Given the root of a binary tree, return the inorder traversal of its values. Mid Left Right.
# class TreeNode:
# 	def __init__(self, val=0, left=None, right=None):
# 		self.val = val
# 		self.left = left
# 		self.right = right
class Solution:
	def inorderTraversal(self, root: TreeNode) -> List[int]:
		result = []

		def helper(node: TreeNode) -> None:
			# base case
			if not node:
				return
			
			helper(node.left)
			result.append(node.val)
			helper(node.right)

		helper(root)

		return result

	# iterative
	def inorderTraversal(self, root: TreeNode) -> List[int]:
		# edge case
		if not root:
			return []
		
		result = []
		queue = []
		current = root
		
		# need to progressively check all of the left before going to the right
		while queue:
			while current.left:
				queue.append(current.left)
				current = current.left
			
			current = queue.pop()
			result.append(current.val)
			
			if current.right:
				queue.append(current.right)
				current = current.right

		while current or queue:
			# continue traversing left until it becomes null
			while current:
				queue.append(current)
				current = current.left

			current = queue.pop()
			result.append(current.val)

			# assume there is a right even though it might be null
			current = current.right

		return result