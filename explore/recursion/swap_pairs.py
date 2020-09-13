# Given a linked list, swap every two adjacent nodes and return its head. Do this recursively.
# If I were to do this iteratively, I would just take a current pointer and progress through a while loop until I hit null.
# Recursively, we only need to update and swap, then move the current node by 2.
# The base case would be when head is None, but we assume that the list is even numbered so we don't have an undefined error.
# class ListNode:
# 	def __init__(self, val=0, next=None):
# 		self.val = val
# 		self.next = next
class Solution:
	def swapPairs(self, head: ListNode) -> ListNode:
		# base case is no more pairs to swap, meaning current node is null or next node is null
		if not head or not head.next:
			return head

		# find the new node for the recursive step
		new_start = head.next.next

		# swap operation without temp
		head, head.next = head.next, head

		# update the previous head to point to the head of the new swap pair start
		head.next.next = self.swapPairs(new_start)
		
		return head
		