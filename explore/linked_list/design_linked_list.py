# Design your implementation of the linked list. You can make it singly or doubly linked. A node should have a val and next.
# Methods to implement are get(index), addAtHead(val), addAtTail(val), addAtIndex(index, val), deleteAtIndex(index).
# Does python have a null value? You have to use None I think.
# I need a class for the node itself right?
class Node:
    def __init__(self, val: int):
        self.val = val
        self.next = None


class MyLinkedList:
    # constructor
    def __init__(self):
        self.head = None
        self.length = 0

    # get value at index in linked list, return -1 if it doesn't exist
    def get(self, index: int) -> int:
        if not self.head:
            return -1

        if index < 0 or index >= self.length:
            return -1

        currentNode = self.head

        for i in range(index):
            currentNode = currentNode.next

        return currentNode.val

    def addAtHead(self, val: int) -> None:
        newNode = Node(val)

        # empty list, set new node as the new head
        if not self.head:
            self.head = newNode
        # otherwise set next pointer of new node to current head, then update head
        else:
            newNode.next = self.head
            self.head = newNode

        self.length += 1

    def addAtTail(self, val: int) -> None:
        newNode = Node(val)

        # empty list, set new node as the new head
        if not self.head:
            self.head = newNode
        # iterate until currentNode becomes tail, then update tail to new node
        else:
            currentNode = self.head

            while currentNode.next:
                currentNode = currentNode.next

            currentNode.next = newNode

        self.length += 1

    def addAtIndex(self, index: int, val: int) -> None:
        # index > self.length because self.length means add to tail
        if index < 0 or index > self.length:
            return

        newNode = Node(val)

        # addToHead()
        if index == 0:
            newNode.next = self.head
            self.head = newNode
            self.length += 1
            return

        # addToTail()
        if index == self.length:
            currentNode = self.head
            while currentNode.next:
                currentNode = currentNode.next
            currentNode.next = newNode
            self.length += 1
            return

        currentNode = self.head  # reset

        # iterate to the node before the real index
        for i in range(index - 1):
            currentNode = currentNode.next

        newNode.next = currentNode.next
        currentNode.next = newNode
        self.length += 1

    def deleteAtIndex(self, index: int) -> None:
        # invalid index
        if index < 0 or index >= self.length:
            return

        if index == 0:
            self.head = self.head.next
            self.length -= 1
            return

        # remove tail, stop at the element before the last
        if index == self.length - 1:
            currentNode = self.head
            while currentNode.next.next:
                currentNode = currentNode.next
            currentNode.next = None
            self.length -= 1
            return

        currentNode = self.head

        for i in range(index - 1):
            currentNode = currentNode.next

        currentNode.next = currentNode.next.next
        self.length -= 1

# This problem isn't too difficult if you are used to it, but keeping track of the references can be confusing at times. Much easier if you have a length property for the linked list, then handle head and tail case individually.
