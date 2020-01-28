/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	// Break down each part.
	let counter = 0;
	let currentNode = head;

	while (currentNode != null) {
		currentNode = currentNode.next;
		counter += 1;
	}

	// Empty list.
	if (counter === 0) return null;

	// Only one element.
	if (counter === 1 && n === 1) {
		return null;
	}

	currentNode = head;

	// Removing the tail.
	if (n === 1) {
		while (currentNode.next.next !== null) {
			currentNode = currentNode.next;
		}

		currentNode.next = null;
		return head;
	}

	// Remove head.
	if (n === counter) {
		head = head.next;
		return head;
	}

	let prevIndex = counter - n - 1;
	let i = 0;
	while (i < prevIndex) {
		currentNode = currentNode.next;
		i += 1;
	}
	currentNode.next = currentNode.next.next;
	return head;
};
