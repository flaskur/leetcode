# Given a link list with nodes that contain a random pointer to any other node or null, return a deep copy of the list.
# class Node:
#     def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
#         self.val = int(x)
#         self.next = next
#         self.random = random
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
