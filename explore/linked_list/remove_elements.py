# Remove all elements from a linked list of integers that have the value val.
# It would be simple if I repeat iteration on each find, but that would be inefficient..
# I should probably iterate one behind to remove elements between and the tail, so I should handle the single element case first.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        # edge case
        if not head:
            return None
        if not head.next and head.val == val:
            return None
        if not head.next:
            return head

        # there are at least two elements in the list at this point

        currentNode = head

        # doesn't handle val, val, but I do it after the while loop
        # the goal of this is to first remove the nodes inbetween that are the val, because I can maintain a particular form
        # worst case scenario is the left over is val, val
        while currentNode.next.next:
            # handling the remove between cases first, then repeat the same thing until the while loop fails
            if currentNode.next.val == val:
                currentNode.next = currentNode.next.next
                # repeat iteration to use the same currentNode
            else:
                # if the current.next isn't a val, move the node along -> doesn't guarantee that head isn't val, only that new current isn't val
                currentNode = currentNode.next

        # at this point we might have val, val leftover or val, x, x, x, val

        # first check and remove tail
        currentNode = head
        while currentNode.next.next:
            currentNode = currentNode.next
        # currentNode guaranteed to be one before tail
        if currentNode.next.val == val:
            currentNode.next = None

        # now we have to check the head
        currentNode = head
        if currentNode.val == val:
            head = currentNode.next

        return head
