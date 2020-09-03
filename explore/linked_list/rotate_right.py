# Given a linked list, rotate to the list to the right by k places.
# Same idea as rotate of array with len(list) - k mod len(list), but with list traversal.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        # edge case
        if not head:
            return None

        # find the length of the list
        currentNode = head
        listLen = 0
        while currentNode:
            currentNode = currentNode.next
            listLen += 1

        # no movement
        if k % listLen == 0:
            return head

        currentNode = head
        for i in range(listLen - (k % listLen) - 1):
            currentNode = currentNode.next

        # assume that you are at the node before newHead
        newHead = currentNode.next
        currentNode.next = None

        # go to the tail of second list
        currentNode = newHead
        while currentNode.next:
            currentNode = currentNode.next
        currentNode.next = head

        return newHead
