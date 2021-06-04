// given head, determine if linked list has a cycle in it.
// use a slow and fast pointer and if there is a cycle, then slow == fast at some point.
func hasCycle(head *ListNode) bool {
	if head == nil {
		return false
	}

	slow := head
	fast := head

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if slow == fast {
			return true
		}
	}

	return false
}