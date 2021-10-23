function copyRandomList(head: Node | null): Node | null {
	let ref = new Map<Node, Node>()

	// create new copy node and map to original
	let current = head
	while (current != null) {
		let node = new Node(current.val, null, null)
		ref.set(current, node)
		current = current.next
	}

	// iterate again to set next/random pointers
	current = head
	while (current != null) {
		let node = ref.get(current)
		// can be null and undefined in map ref
		node.next = current.next == null ? null : ref.get(current.next)
		node.random = current.random == null ? null : ref.get(current.random)
		current = current.next
	}

	return ref.get(head)
}
