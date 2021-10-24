function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	// edge case
	if (l1 == null) return l2
	if (l2 == null) return l1

	// reverse both lists
	l1 = reverseList(l1)
	l2 = reverseList(l2)

	// add normally
	let pseudo = new ListNode(0, null)
	let current = pseudo
	let carry = 0
	while (l1 != null && l2 != null) {
		console.log(l1.val, l2.val)
		let digit = (l1.val + l2.val + carry) % 10
		carry = Math.floor((l1.val + l2.val + carry) / 10)

		current.next = new ListNode(digit, null)
		current = current.next
		l1 = l1.next
		l2 = l2.next
	}

	// fill remaining list
	while (l1 != null) {
		let digit = (l1.val + carry) % 10
		carry = Math.floor((l1.val + carry) / 10)

		current.next = new ListNode(digit, null)
		current = current.next
		l1 = l1.next
	}
	while (l2 != null) {
		let digit = (l2.val + carry) % 10
		carry = Math.floor((l2.val + carry) / 10)

		current.next = new ListNode(digit, null)
		current = current.next
		l2 = l2.next
	}

	if (carry == 1) {
		current.next = new ListNode(1, null)
	}

	// reverse again to get proper order
	return reverseList(pseudo.next)
}

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
