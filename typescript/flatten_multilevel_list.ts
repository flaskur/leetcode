function flatten(head: Node | null): Node | null {
	if (head == null) return null

	connect(head)

	return head
}

function connect(node: Node): Node {
	// base case
	if (node.next == null && node.child == null) {
		return node
	}

	let current = node
	while (current != null) {
		// absolute tail
		if (current.child == null && current.next == null) return current

		// no child move on
		if (current.child == null) {
			current = current.next
			continue
		}

		// currently tail => switch next with child
		if (current.next == null) {
			current.child.prev = current
			current.next = current.child
			current.child = null
			current = current.next
			continue
		}

		// next is now guaranteed to exist
		let tail = connect(current.child)
		current.child.prev = current
		current.next.prev = tail
		tail.next = current.next
		current.next = current.child
		current.child = null

		// move on
		current = tail
	}

	// should never happen
	return node
}
