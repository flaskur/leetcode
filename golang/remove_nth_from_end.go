// given head of linked list, remove nth node from end of list and return head.
// if given size of the linked list, you can move size - n - 1 times then remove next node.
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	// find size of entire list
	size := 0
	current := head
	for current != nil {
		current = current.Next
		size += 1
	}
	// current is now nil

	// edge case
	if size == 1 {
		return nil
	}
	// edge case move head
	if size == n {
		return head.Next
	}

	// move size - n - 1 times to get to node before deleted node
	current = head
	for i := 0; i < size-n-1; i++ {
		current = current.Next
	}

	// if tail set next to nil, if inbetween set skip next
	if current.Next.Next == nil {
		current.Next = nil
	} else {
		current.Next = current.Next.Next
	}

	return head
}