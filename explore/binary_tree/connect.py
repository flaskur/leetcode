# Given a perfect binary tree, populate each pointer to point to its next right node if there is a right node.
# I would do a level order traversal and populate a hash map. Then edit the pointers using the map.
# struct Node {
# 	int val;
# 	Node *left;
# 	Node *right;
# 	Node *next;
# }
class Solution:
	def connect(self, root: 'Node') -> 'Node':
		if not root:
			return root

		row_map = {}

		def helper(node: 'Node', row: int) -> None:
			if not node:
				return

			if row in row_map:
				row_map[row].append(node) # append the node itself, not val
			else:
				row_map[row] = [node]

			helper(node.left, row + 1)
			helper(node.right, row + 1)

		helper(root, 1)

		for row in row_map.values():
			# print('row')
			for i in range(len(row)):
				# print(row[i].val)

				# last element in row, points to null
				if i == len(row) - 1:
					row[i].next = None
				else:
					row[i].next = row[i+1]

		return root
		