class LRUCache {
	capacity: number
	cache: Map<number, Node>
	head: Node
	tail: Node

	constructor(capacity: number) {
		this.capacity = capacity
		this.cache = new Map<number, Node>()
		this.head = new Node(0, 0, null, null)
		this.tail = new Node(0, 0, null, null)
		this.head.next = this.tail
		this.tail.prev = this.head
	}

	// removes a node from the list => guaranteed to exist
	remove(node: Node) {
		node.prev.next = node.next
		node.next.prev = node.prev
		this.cache.delete(node.key)
	}

	// adds a node to head of the list => after pseudo head
	add(node: Node) {
		let oldHead = this.head.next
		this.head.next = node
		node.prev = this.head
		node.next = oldHead
		oldHead.prev = node
		this.cache.set(node.key, node)
	}

	get(key: number): number {
		// check if the key exists in the cache
		if (!this.cache.has(key)) return -1

		// does exist, move node to head
		let node = this.cache.get(key)
		this.remove(node)
		this.add(node)

		return node.value
	}

	put(key: number, value: number): void {
		// check if already exists => update value and move to recently used (head)
		if (this.cache.has(key)) {
			let node = this.cache.get(key)
			this.remove(node)
			node.value = value
			this.add(node)
			return
		}

		// check if capacity is full => evict tail
		if (this.capacity == this.cache.size) {
			this.remove(this.tail.prev)
		}

		// add the new node to the head
		let node = new Node(key, value, null, null)
		this.add(node)
	}
}

class Node {
	key: number
	value: number
	prev: Node
	next: Node

	constructor(key: number, value: number, prev: Node, next: Node) {
		this.key = key
		this.value = value
		this.prev = prev
		this.next = next
	}
}
