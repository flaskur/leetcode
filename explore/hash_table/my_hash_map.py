# Design a hash map without using any built in hash table libraries.
# So for this case, you should expect keys and values to range from 0 to 1 million which means that it would be impractical to have an array of 1 million.
# It would be better to make a hashing function that takes the key and assigns to some index based on some formula. For instance, you could take the key and take the modulus of a prime number which would correspond with the index of the bucket.
# The problem with that approach would be handling collisions. Would you just replace it? The array is fixed so a collision is bound to happen, but we must ensure it exists.
# Handling collision by chaining and representing entries in the array with linked lists.
class ListNode:
    # type annotation with default value is param: type = default
    def __init__(self, key: int = None, value: int = None):
        self.key = key
        self.value = value
        self.next = None


class MyHashMap:
    def __init__(self):
        # arbitrary prime number to represent number of buckets.
        self.size = 997

        # setting up an array with each entry having an empty list node
        self.map = []
        for i in range(self.size):
            self.map.append(ListNode())

    # should probably include a hashing function to make the assignment nontrivial

    def put(self, key: int, value: int) -> None:
        index = key % self.size  # because key can be 1 million
        # accesses the head list node -> usually empty dummy node
        current_head = self.map[index]

        current_node = current_head
        while current_node:
            # overwriting in the case of exact same key without modulus operation
            if current_node.key == key:
                current_node.value = value
                return
            current_node = current_node.next

        # create new node and attach psuedo head of linked list chain -> AFTER DUMMY HEAD
        new_node = ListNode(key, value)
        new_node.next = current_head.next
        current_head.next = new_node

    def get(self, key: int) -> int:
        index = key % self.size
        current_head = self.map[index]

        # have it iterate through linked list to find value if it exists in chain
        current_node = current_head
        while current_node:
            if key == current_node.key:
                return current_node.value
            current_node = current_node.next

        return -1  # failed to find the key in list chain

    def remove(self, key: int) -> None:
        index = key % self.size
        current_head = self.map[index]

        # you would have to remove the node if it exists
        current_node = current_head
        while current_node.next:
            if current_node.next.key == key:
                current_node.next = current_node.next.next
                return
            current_node = current_node.next

        # didn't remove anything

# This was the proper way to do it. Essentially, you modeled a hash map using an array but each entry is a linked list chain.
# The chain is necessary for handling key collisions and collisions happen because the hash map is an arbitrary finite size, because key can be 0 to 1 million values.
# The operation is taking their integer key, performing a modulus on the size to access real index array, then traversing through linked list to operate.
# We instantiated each array entry with a dummy linked list node, which makes operations much easier.
