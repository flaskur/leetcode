# Given a root node reference of a bst and a key, delete the node with the given key. Return the root with updated bst.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
	def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
		if not root:
			return root
		if root.val > key:
			root.left = self.deleteNode(root.left, key)
		elif root.val < key:
			root.right = self.deleteNode(root.right, key)
		else:
			if not root.right:
				return root.left
			if not root.left:
				return root.right
			
			temp = root.right
			mini = temp.val
			while temp.left:
				temp = temp.left
				mini = temp.val
			root.val = mini
			root.right = self.deleteNode(root.right, root.val)
		
		return root
		
		# # edge case
		# if not root:
		# 	return root

		# if (not root.left and not root.right and key == root.val):
		# 	return None

		# def helper(node: TreeNode, key: int) -> TreeNode:
		# 	# no node, can't find value, return without changing
		# 	if not node:
		# 		return None
			
		# 	# key is in left subtree
		# 	if key < node.val:
		# 		node.left = helper(node.left, key) # checks left subtree and assigns to result
		# 		return node # remember to return node
		# 	elif key > node.val:
		# 		node.right = helper(node.right, key)
		# 		return node
		# 	else:
		# 		if not node.left and not node.right:
		# 			return None
		# 		elif not node.left and node.right:
		# 			return node.right
		# 		elif not node.right and node.left:
		# 			return node.left
		# 		else:
		# 			# print('two children')
		# 			replace_node = TreeNode(findMin(node.right, key))
		# 			replace_node.right = self.deleteNode(replace_node.right, replace_node.val)
		# 			replace_node.left = node.left
					
		# 			return replace_node

		# def findMin(node: TreeNode, val: int) -> int:
		# 	# base case
		# 	if not node.left:
		# 		return node.val

		# 	return findMin(node.left, val)

		# if key == root.val:
		# 	return helper(root, key)

		# helper(root, key)
		# return root
				

