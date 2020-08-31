# Given a linked list, determine if it has a cycle. Meaning the linked list is already connected in such a fashion that there will be cycle or it ends. Meaning there cannot be a cycle if it reaches null.
# Idea to have a slow and fast pointer, if fast pointer becomes None, return false. Otherwise a cycle must exist when fast and slow pointer become the same reference node.
# class ListNode:
#   def __init__(self, x):
#     self.val = x
#     self.next = None
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        # edge case empty list
        if not head:
            return False

        slow = head
        fast = head

        # this condition will only fail if there is no cycle, otherwise fast and slow pointer must meet each other at some point in cycle
        while fast.next:
            # if fast.next is defined, then fast.next.next must be defined or None
            fast = fast.next.next
            slow = slow.next

            # fast is None so it will break on fast.next check, so need to check condition here
            if not fast:
                return False

            # otherwise fast is defined and if it meets slow pointer, must be a cycle
            if fast == slow:
                return True

        return False

# issue occurs when fast.next is None so fast.next.next is not defined. So instead you can do fast.next if that does exist, then you can do another check for fast.next.next.
# hash table approach is to populate map with all node references, then traverse through linked list. If it becomes null we reached end and failed to see cycle. However if we encounter something already in the hash table, a cycle must exist.
