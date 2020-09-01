# Given a singly linked list, determine if it is a palindrome.
# Easiest solution is to traverse a populate a list, then compare the list with its reverse.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        # edge case is empty = palindrome?
        if not head or not head.next:
            return True

        listOrder = []

        currentNode = head
        while currentNode:
            listOrder.append(currentNode.val)
            currentNode = currentNode.next

        return listOrder[:] == listOrder[::-1]

# Without another data structure, you would need to split the linked list in half and reverse the other half. Then you would compare the two lists by value until null. It actually doesn't break in half if it's not a even number of elements though.
