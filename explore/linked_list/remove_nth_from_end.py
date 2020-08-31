# Given a linked list, remove the nth node from the end of the list and return its head.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        # edge case
        if not head:
            return None

        # find the length
        listLen = 0

        currentNode = head
        while currentNode:
            listLen += 1
            currentNode = currentNode.next

        # removing only element in list, leaves None
        if listLen == 1:
            return None

        # remove head
        if listLen == n:
            head = head.next
            listLen -= 1
            return head

        # remove tail
        if n == 1:
            currentNode = head
            while currentNode.next.next:
                currentNode = currentNode.next

            currentNode.next = None
            listLen -= 1
            return head

        # listLen - 1 - n is iteration amount for general case
        # after iteration, you are at the node before the one you need to remove
        currentNode = head
        for i in range(listLen - n - 1):
            currentNode = currentNode.next

        # remove the node
        # next.next is guaranteed to be defined, because we handled tail case separately
        currentNode.next = currentNode.next.next
        listLen -= 1

        return head
