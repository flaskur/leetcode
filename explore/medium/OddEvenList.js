/**
 * Given a singly linked list, group all the odd nodes together followed by the even nodes. We don't care about the values, only the placements. 
 * Ex. 1->2->3->4->5->NULL should return 1->3->5->2->4->NULL.
 * Ex. 2->1->3->5->6->4->7->NULL should return 2->3->6->7->1->5->4->NULL
 * One obvious thing is that you should have a runner for both odd and evens. I don't see a space restriction so I guess I just make the list instances from that.
 * 
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function(head) {
	// Null list, returns null.
	if (head === null) return null;

	// Find the length of the linked list. O(n) time.
	let length = 0;
	let lengthRunner = head;
	while (lengthRunner !== null) {
		lengthRunner = lengthRunner.next;
		length += 1;
	}

	// Should have no change...
	if (length === 1 || length === 2) return head;

	// General case we need an odd and even runner.
	let oddRunner = head;
	let evenRunner = head.next;

	console.log(`start with odd ${oddRunner.val} and even ${evenRunner.val}`);

	// So you actually are suppose to do it in place. I'm gonna do the simple solution with memory first, but without space I would work backwards.
	let tail;
	while (oddRunner !== null) {
		console.log(`odd ${oddRunner.val}`);

		let newNode = new ListNode(oddRunner.val);
		console.log(`new node value is ${newNode.val}`);
		if (tail === undefined) head = newNode;
		if (tail !== undefined) tail.next = newNode;
		tail = newNode;

		// The check needs to be on the bottom.
		if (oddRunner.next === null) break;
		else if (oddRunner.next.next === null) break;
		oddRunner = oddRunner.next.next;
	}
	while (evenRunner !== null) {
		console.log(`even ${evenRunner.val}`);
		let newNode = new ListNode(evenRunner.val);
		console.log(`new node value is ${newNode.val}`);

		tail.next = newNode;
		tail = newNode;

		if (evenRunner.next === null) break;
		else if (evenRunner.next.next === null) break;
		evenRunner = evenRunner.next.next;
	}
	// The problem is that I can't reference runner.next.next if it doesn't exist. Meaning I can't do undefined because I didn't declare a variable for that. If I see that next is null, then don't do anything.

	return head;
};

// Try solution without memory with O(1) space. Also O(# nodes) time complexity.
const oddEvenList = function(head) {
	if (head === null) return null;
	let odd = head;
	let even = head.next;
	let evenHead = even;

	while (even !== null && even.next !== null) {
		odd.next = even.next;
		odd = odd.next;
		even.next = odd.next;
		even = even.next;
	}
	odd.next = evenHead;
	return head;
};

// So basically the idea here is to build two linked lists by splitting the original. The count iteration depends on even not being null and not encountering a null. That's actually really intuitive. Yet again I was overthinking it too much.
