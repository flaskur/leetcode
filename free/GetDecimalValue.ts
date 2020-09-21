/**
 * Given head node of a singly linked list, the value of each node is 0 or 1 which is the binary representation of a number. Return the decimal value of the number -> base 10.
 * I could populate a list and then parseInt with base 2.
 * // class ListNode {
// 	val: number;
// 	next: ListNode | null;
// 	constructor(val?: number, next?: ListNode | null) {
// 		this.val = val === undefined ? 0 : val;
// 		this.next = next === undefined ? null : next;
// 	}
// }
 */
const getDecimalValue = (head: ListNode | null): number => {
	let digits: number[] = [];

	const traverse = (node: ListNode): void => {
		// base case
		if (!node) return;

		digits.push(node.val);
		return traverse(node.next);
	};
	traverse(head);

	return parseInt(digits.join(''), 2);
};
