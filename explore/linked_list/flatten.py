# Given a doubly linked list with next and prev pointers and possibly a child pointer, flatten the list so taht all nodes appear single level doubly linked list.
# If we encounter a node with a child, we need to traverse through it immediately, maybe recursion.
# class Node:
#     def __init__(self, val, prev, next, child):
#         self.val = val
#         self.prev = prev
#         self.next = next
#         self.child = child
class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        if not head:
            return None

        currentNode = head

        # iterate and chain encounters of child if they exists, no need for recursion because we step one at a time through child chains
        while currentNode:
            # no child, proceed
            if not currentNode.child:
                currentNode = currentNode.next
                continue

            # link end
            childNode = currentNode.child
            while childNode.next:
                childNode = childNode.next
            if currentNode.next:
                currentNode.next.prev = childNode
            childNode.next = currentNode.next

            # link start
            currentNode.next = currentNode.child
            currentNode.child.prev = currentNode
            currentNode.child = None

        return head
