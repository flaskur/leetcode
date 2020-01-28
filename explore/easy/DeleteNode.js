/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
	// Some logic but with objects instead.
	let replacedValue = node.next.val;
	node.val = replacedValue;
	// Change the pointers.
	node.next = node.next.next;
};
