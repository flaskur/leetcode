/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	if (head === null) return true;

	// This method just stores the values of the linked list in the array since access is much easier.
	let forwardOrder = new Array();

	let currentNode = head;
	while (currentNode !== null) {
		forwardOrder.push(currentNode.val);
		currentNode = currentNode.next;
	}

	// The JS reverse method is destructive, need to make a new instance.
	let reverseOrder = forwardOrder.slice().reverse();

	console.log(forwardOrder, reverseOrder);

	for (let i = 0; i < forwardOrder.length; i++) {
		if (forwardOrder[i] !== reverseOrder[i]) return false;
	}

	return true;
};
