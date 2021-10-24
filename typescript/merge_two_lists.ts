function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let pseudo = new ListNode(0, null)
	let current = pseudo

	// traverse both lists for smallest
	while (l1 != null && l2 != null) {
		if (l1.val <= l2.val) {
			current.next = l1
			current = current.next
			l1 = l1.next
		} else {
			current.next = l2
			current = current.next
			l2 = l2.next
		}
	}

	// connect with remaining list
	if (l1 != null) {
		current.next = l1
	}
	if (l2 != null) {
		current.next = l2
	}

	return pseudo.next
}
