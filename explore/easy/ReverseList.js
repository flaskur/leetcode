/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let currentNode = head;
	let prev = null;
	let next;

	let newHead = null;

	while (currentNode !== null) {
		// Tail found.
		if (currentNode.next === null) newHead = currentNode;

		next = currentNode.next;
		currentNode.next = prev;
		prev = currentNode;
		currentNode = next;
	}

	return newHead;
};
