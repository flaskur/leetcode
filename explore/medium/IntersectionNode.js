/**
 * Find the node at which intersects two singly linked lists intersect. One interesting thing is that the values are not unique, so you can't just use a hash table and find the one that is repeated twice. Another thing is that we need to return the reference to the node, not the value of the node.
 * 
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
	// This one is interesting. Essentially we want to find the node such that the next of that node exists for both linked lists. You would probably need two pointers for each list. Well we could iterate through each and see which nodes have the same value, hence giving us a list of possible candidates.
	// We also know that the ends for both will be the same, so maybe work backwards for both until they fail? That seems like the most logical option. I'd find the tail reference and work backwards, though I don't want to mess with the original list... If I iterate through each node and and assign previous pointers until we reach a null, that could work out well. Then a tail at the end for each list. If the tails differ then immediately you can say that the answer is null. We work backwards until there is a difference. Then we just return the reference to the node where it was fine. Yeah... Try this logic...
	// The only problem with that logic is the node declaration doesn't have a previous pointer. I can't really assing values either... Maybe a hash but that wouldn't really make sense since the key has to be a string. A regular map that passes a ListNode instance as a key would work.

	// Assume that ListNode actually had a prev property...
	let currentA = headA;
	let currentB = headB;
	let prevA = null;
	let prevB = null;
	let tailA;
	let tailB;
	while (currentA !== null) {
		tailA = currentA;
		currentA.prev = prevA;
		currentA = currrentA.next;
		prevA = currentA;
	}
	while (currentB !== null) {
		tailB = currentB;
		currentB.prev = prevB;
		currrentB = currentB.next;
		prevB = currentB;
	}

	// This shouldn't work because we don't have the previous reference for the ListNode member, but you are assuming that you do have a property by calling current.prev. You'll need to use another data structure to hold it probably. Unfortunately the question requires constant O(1) memory used.

	// They should both be references to the same node in memory, so we can use the a comparison like this.
	if (tailA !== tailB) return null;

	currentA = tailA;
	currentB = tailB;
	while (currentA.prev === currentB.prev && (currentA.prev !== null || currentB.prev !== null)) {
		// Iteration ends when this fails. It would probably be better to use current.prev instead.
		currentA = currentA.prev;
		currentB = currentB.prev;
	}
	// The actual node instance should be currentA and currentB.
	return currentA;

	// Again this doesn't work because we dont have a prev property. Can we mess with the list itself? Yeah, but you have to change it back afterwards. So instead of this implementation, you could reverse both lists which essentially reverse the pointers only. You wouldn't need to do it for both though right?
};

// No memory limit, using arrays to store and process.
const getIntersectionNode = function(headA, headB) {
	// Edge case, either is empty means no intersection.
	if (headA === null || headB === null) return null;

	// Build the arrays for both linked lists.
	let list1 = [];
	let list2 = [];

	let current1 = headA;
	let current2 = headB;

	while (current1 !== null) {
		// Can arrays hold the node instance themselves? Yeah shouldn't be a problem...
		list1.push(current1);
		current1 = current1.next;
	}
	while (current2 !== null) {
		list2.push(current2);
		current2 = current2.next;
	}

	let last = null;
	while (list1[list1.length - 1] === list2[list2.length - 1] && (list1.length > 0 && list2.length > 0)) {
		last = list1[list1.length - 1];
		list1.pop();
		list2.pop();
	}

	return last;
};

// Discussion solution.
const getIntersectionNode = function(headA, headB) {
	if (headA === null || headB === null) return null;

	let a = headA;
	let b = headB;

	// Not sure why this doesn't fail on case where they are the same length list. The pointers should never meet each other right?
	while (a !== b) {
		if (a === null) {
			a = headB;
		} else a = a.next;
		if (b === null) {
			b = headA;
		} else b = b.next;
	}

	return a;
};

// Okay, so the general idea of working backwards is nice but cannot be used effectively without using some memory. The only way to solve without memory is by using something like the walker/runner method from LL cycles by setting the tails of both list to the other's head. However, the one thing that doesn't make sense is how the pointers will ever be equal if the length of the lists are the same. Maybe I'm not thinking about this properly.
