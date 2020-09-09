# Design a hash set without using any built in hash table libraries.
# Based on the methods, it seems like we can just represent the hash set, using an array. This is because we only need to keep track of the key and whether or not it exists, but no corresponding value.
# Remember that sets do not have repeats or duplicates, so you need to check if it already exists.
class MyHashSet:
    def __init__(self):
        # choose to represent the hash set as an array
        self.set = []

    def add(self, key: int) -> None:
        if not self.contains(key):
            self.set.append(key)

    def remove(self, key: int) -> None:
        for i in range(len(self.set)):
            if self.set[i] == key:
                self.set = self.set[:i] + self.set[i+1:]
                return

    def contains(self, key: int) -> bool:
        for num in self.set:
            if num == key:
                return True

        return False

# A linked list is the more optimal way to represent the hash set because insertions and deletions are O(n) which is the add() and remove() methods.
# The contains method still requires O(n) for the array and the linked list, so in terms of performance for these methods, a LL would be better.
# Actually for the linked list, deletion would still require a search, so that's wrong. It does have faster insertions but it assumes just adding to end.
# You could use a BST, but that's a bit overkill for this situation.
