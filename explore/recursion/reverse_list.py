# Reverse a singly linked list recursively.
# The base case is when the current pointer is null. Each step in the recursion should update the next the of current to the previous value and then call the function again. We need to keep track of previous then.
# class ListNode:
# 	def __init__(self, val=0, next=None):
# 		self.val = val
# 		self.next = next

class Solution:
	def reverseList(self, head: ListNode) -> ListNode:
		# need a helper because we need to keep track of previous node
		def helper(previous: ListNode, current: ListNode) -> ListNode:
			# edge case
			if not current:
				return None
			
			# base case is last node in list
			if not current.next:
				current.next = previous
				return current

			# keep temp node to call helper again, set current next to previous node
			new_current = current.next
			current.next = previous

			# call helper again, but make sure to return because this is stack execution.
			return helper(current, new_current)

		return helper(None, head)
		
# Made a dumb mistake of not returning for every recursive call and only on the base case, but we expect the new head reference.		