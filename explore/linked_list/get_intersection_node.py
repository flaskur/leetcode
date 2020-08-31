# Find the node at which the intersection of two singly linked lists begin.
# Right off the bat, you could use the hash table method of having the object reference as a key. Iterate through one list and then the second one.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        # edge case
        if not headA or not headB:
            return None

        # build a boolean hash for the node references as keys, but use a tuple wrapper
        listHash = {}

        currentA = headA

        # iterate and populate the list hash with first list
        while currentA:
            listHash[(currentA,)] = True
            currentA = currentA.next

        currentB = headB

        # iterate through the second list to find the repeated node in list hash
        while currentB:
            if (currentB,) in listHash:
                return currentB
            else:
                currentB = currentB.next

        # failed to find repeat node reference, return null
        return None
