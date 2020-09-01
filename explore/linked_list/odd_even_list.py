# Given a singly linked list, group all odd nodes together followed by even nodes.
# One approach is to start off with two pointers one at head and one at second element if it exists. Then we build the odds chain and evens chain separately. The one part you need to be careful of is skipping twice will mess up if you are already at the end since node.next.next is undefined.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        # edge cases
        if not head:
            return None
        if not head.next:
            return head
        if not head.next.next:
            return head

        oddNode = head
        evenHead = head.next
        evenNode = head.next

        # condition means both are not tail
        # iterate and update concurrently to avoid overwriting the path
        while oddNode.next and evenNode.next:
            oddNode.next = oddNode.next.next
            evenNode.next = evenNode.next.next

            oddNode = oddNode.next
            evenNode = evenNode.next

        oddNode.next = evenHead  # chain both lists together

        return head

#         if not head:
#             return None
#         if not head.next:
#             return head

#         # guaranteed to have at least two elements
#         oddNode = head
#         evenHead = head.next
#         evenNode = head.next

#         # problem is the update condition doenst work with the hwile condition, because it might become tail
#         # in this case oddNode became the 5 node and then next.next was undefined

#         # build the odd chain, oddNode.next.next is guaranteed to exist (but might be None) since there are at least two elements
#         while oddNode.next:
#             # next odd chain is not null
#             if oddNode.next.next:
#                 oddNode.next = oddNode.next.next
#                 oddNode = oddNode.next
#             # second last element, cut off chain
#             else:
#                 oddNode.next = None
#                 break

#         while evenNode.next:
#             if evenNode.next.next:
#                 evenNode.next = evenNode.next.next
#                 evenNode = evenNode.next
#             else:
#                 evenNode.next = None
#                 break

#         # combine the odd and even chains by pointing odd tail to even head
#         oddNode.next = evenHead

#         currentNode = head
#         while currentNode:
#             print(currentNode.val)
#             currentNode = currentNode.next

#         currentNode = evenHead
#         while currentNode:
#             print(currentNode.val)
#             currentNode = currentNode.next

#         return head

# # The problem is that I'm overwriting the path that the even nodes use to build their chain. I have to either do them concurrently, or save the nodes somehow.
