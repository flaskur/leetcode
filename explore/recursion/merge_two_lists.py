# Merge two sorted linked lists and return it as a new sorted list using recursion.
# The base would be when one of the chain node pointers becomes null but you need to compare both at once.
# Also I would start off by setting the new head by quick comparison.
# class ListNode:
# 	def __init__(self, val=0, next=None):
# 		self.val = val
# 		self.next = next
class Solution:
	def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
		# edge cases
		# if not l1 and not l2:
		# 	return None
		# if not l1:
		# 	return l2
		# if not l2:
		# 	return l1

		def helper(current: ListNode, l1: ListNode, l2: ListNode) -> None:
			# base case
			if not l1:
				current.next = l2
				return l2
			if not l2:
				current.next = l1
				return l1

			if l1.val <= l2.val:
				new_current = l1
				current.next = new_current
				return helper(new_current, l1.next, l2)
			elif l2.val < l1.val:
				new_current = l2
				current.next = new_current
				return helper(new_current, l1, l2.next)

		dummy = ListNode()

		helper(dummy, l1, l2)

		return dummy.next