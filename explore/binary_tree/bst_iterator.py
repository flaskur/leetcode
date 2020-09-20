# Implement an iterator over a binary search tree. Calling next() returns the next smallest number.
# The constructor function should create and build a array that holds the node values in inorder traversal.
class BSTIterator:
	def __init__(self, root: TreeNode):
		self.values = []
		self.inorderTraversal(root)
		
	def inorderTraversal(self, node: TreeNode) -> None:
		if not node:
			return

		if node.left:
			self.inorderTraversal(node.left)
			
		self.values.append(node.val)

		if node.right:
			self.inorderTraversal(node.right)

	def next(self) -> int:
		return self.values.pop(0)

	def hasNext(self) -> bool:
		return len(self.values) > 0
	

		