# Given two non empty linked lists, the digits are stored in reverse order, add the two numbers and return as a linked list
# Idea is similar to the plus one or binary add, continue to loop until both numbers are gone and theres no longer a carry, then reverse the populated result.
# Difference is that the end return is a linked list that doesn't require a reversal, just populate it.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # use a dummy head to add to resultCurrent.next normally, we ignore dummy later
        dummyHead = ListNode()

        resultHead = dummyHead
        resultCurrent = dummyHead

        currentOne = l1
        currentTwo = l2
        carry = 0

        # continue to build list until both numbers are empty and there is no longer a carry
        while currentOne or currentTwo or carry:
            # only a carry exists so add to result and break
            if not currentOne and not currentTwo:
                newNode = ListNode(carry)
                resultCurrent.next = newNode
                resultCurrent = resultCurrent.next
                break  # technically redundant
            elif not currentOne:
                if currentTwo.val + carry == 10:
                    newNode = ListNode(0)
                    carry = 1
                else:
                    newNode = ListNode(currentTwo.val + carry)
                    carry = 0
                resultCurrent.next = newNode
                resultCurrent = resultCurrent.next
                currentTwo = currentTwo.next
            elif not currentTwo:
                if currentOne.val + carry == 10:
                    newNode = ListNode(0)
                    carry = 1
                else:
                    newNode = ListNode(currentOne.val + carry)
                    carry = 0
                resultCurrent.next = newNode
                resultCurrent = resultCurrent.next
                currentOne = currentOne.next

            # both are defined, so add their values to a newly created node and move both pointers
            else:

                sum = currentOne.val + currentTwo.val + carry

                if sum >= 10:
                    newNode = ListNode(sum % 10)
                    resultCurrent.next = newNode
                    resultCurrent = resultCurrent.next
                    carry = 1
                    currentOne = currentOne.next
                    currentTwo = currentTwo.next
                else:
                    newNode = ListNode(sum)
                    resultCurrent.next = newNode
                    resultCurrent = resultCurrent.next
                    carry = 0
                    currentOne = currentOne.next
                    currentTwo = currentTwo.next

        # return list with removed dummy head
        return resultHead.next
