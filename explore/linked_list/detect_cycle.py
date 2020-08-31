# Given a linked list, return the node where the cycle begins, if there is no cycle return null.
# The two pointers method would work the same way, but I should try hash table approach.
# Might be an issue since the key for the dict can't be a object, could use value if they are unique. Can't use val unique assumption.
# The object ref not being a key defeats the purpose of the hash table. At that point it's better to just use a list. What if I wrap object instance in tuple?
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        # edge case
        if not head:
            return None

        # populate hash with node references, as boolean hash
        listHash = {}

        currentNode = head

        # iterate until we reach end or find the node instance in dictionary
        while currentNode:
            if (currentNode,) in listHash:
                return currentNode
            else:
                listHash[(currentNode,)] = True
                currentNode = currentNode.next

        return None  # failure return what value?

# Okay, so the hash table approach works and the challenge was setting an object instance as the key, which is solved by wrapping it in a tuple since you can't use an object as a key in a dictionary.
