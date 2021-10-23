function reverseList(head: ListNode | null): ListNode | null {
	// edge case
	if (head == null || head.next == null) return head

	let next = null
	let current = head
	while (current != null) {
		let prev = current.next
		current.next = next
		next = current
		current = prev
	}

	// next ends up as old tail / new head after reversing
	return next
}
