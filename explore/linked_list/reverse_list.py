# Reverse a singly linked list. Return the new head?
# Idea behind this is to use three pointers prev, next, and current with setting prev to null initially. Iterate until current is no longer defined.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # edge case:
        if not head:
            return None
        if not head.next:
            return head

        previous = None
        current = head
        next = current  # you need next because you overwrite it during the while loop

        while current:
            # saves the next reference so you can overwrite current.next with previous
            next = current.next
            current.next = previous
            previous = current
            current = next

        return previous
