function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let psuedo = new ListNode(0, null)
	let current = psuedo
	let carry = 0

	while (l1 != null && l2 != null) {
		let digit = (l1.val + l2.val + carry) % 10
		carry = Math.floor((l1.val + l2.val + carry) / 10)

		current.next = new ListNode(digit, null)
		current = current.next
		l1 = l1.next
		l2 = l2.next
	}

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

	return psuedo.next
}
