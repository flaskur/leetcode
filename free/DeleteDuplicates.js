/**
 * Given a sorted linked list, delete all nodes taht have duplicate numbers, leaving only distinct numbers from the original list.
 * 
 * 
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
	// edge case
	// only 1 element means no duplicates
	if (!head || !head.next) {
		return head;
	}

	let countMap = new Map();

	// iterate through linked list and populate count map
	let currentNode = head;
	while (currentNode) {
		if (countMap.has(currentNode.val)) {
			countMap.set(currentNode.val, countMap.get(currentNode.val) + 1);
		} else {
			countMap.set(currentNode.val, 1);
		}

		currentNode = currentNode.next;
	}

	// ignoring head for now, remove nums that have count greater than 1
	currentNode = head;
	while (currentNode.next) {
		if (!currentNode.next.next) {
			// console.log('check tail');
			if (countMap.get(currentNode.next.val) > 1) {
				// console.log('removed tail');
				currentNode.next = null;
				break;
			}
		}

		if (countMap.get(currentNode.next.val) > 1) {
			// console.log('removing inbetween');
			currentNode.next = currentNode.next.next;
			// repeat without moving pointer
			continue;
		}

		currentNode = currentNode.next;
	}

	// check head
	if (countMap.get(head.val) > 1) {
		// there might not be any other elements
		if (!head.next) return null;

		// otherwise update head
		head = head.next;
	}

	return head;
};
