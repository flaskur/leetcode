// hash table reference copy
func copyRandomList(head *Node) *Node {
	// maps original to copy node
	ref := map[*Node]*Node{}

	// create copy nodes and map
	current := head
	for current != nil {
		// need to create all nodes before assigning ptrs
		copy := &Node{Val: current.Val}
		ref[current] = copy
		current = current.Next
	}

	// set pointers correctly
	current = head
	for current != nil {
		copy := ref[current]
		copy.Next = ref[current.Next]
		copy.Random = ref[current.Random]
		current = current.Next
	}

	return ref[head]
}

// interleaving linked list
func copyRandomList(head *Node) *Node {
	// edge case
	if head == nil {
		return nil
	}

	// create and interleave copy nodes
	current := head
	for current != nil {
		copy := &Node{
			Val:  current.Val,
			Next: current.Next,
		}
		current.Next = copy
		current = current.Next.Next
	}

	// mark random ptrs for copies
	current = head
	for current != nil {
		if current.Random == nil {
			current.Next.Random = nil
		} else {
			current.Next.Random = current.Random.Next
		}
		current = current.Next.Next
	}

	// remove original nodes from list => have to fix original list
	newHead := head.Next
	old := head
	current = newHead
	for current.Next != nil {
		temp := current.Next
		current.Next = current.Next.Next
		old.Next = temp

		old = old.Next
		current = current.Next
	}

	old.Next = nil

	return newHead
}