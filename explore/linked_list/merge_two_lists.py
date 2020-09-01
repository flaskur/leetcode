# Merge two sorted linked lists and return as a new sorted list.
# I would have pointers to both lists and start head and the one that is less than the other. Compare with each until one becomes null, then chain together.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # edge case
        if not l1:
            return l2
        if not l2:
            return l1

        head = None
        currentOne = None
        currentTwo = None

        # assigning the current first and a setting up list pointers
        if l1.val <= l2.val:
            head = l1
            currentOne = l1.next
            currentTwo = l2
        else:
            head = l2
            currentOne = l1
            currentTwo = l2.next

        # chain the lists together if one pointer already fails from assigning current
        if not currentOne:
            head.next = currentTwo
            return head
        if not currentTwo:
            head.next = currentOne
            return head

        currentNode = head

        # iterate until one of the lists ends, this is effectively while true
        while currentNode:
            if currentOne.val <= currentTwo.val:
                currentNode.next = currentOne
                currentOne = currentOne.next

                if not currentOne:
                    currentNode.next.next = currentTwo
                    return head

                currentNode = currentNode.next
            else:
                currentNode.next = currentTwo
                currentTwo = currentTwo.next

                if not currentTwo:
                    currentNode.next.next = currentOne
                    return head

                currentNode = currentNode.next

        return head
