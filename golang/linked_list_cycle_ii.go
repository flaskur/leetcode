func detectCycle(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}

	slow, fast, entry := head, head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		// found cycle
		if slow == fast {
			// find entry point => math explanation
			for slow != entry {
				slow = slow.Next
				entry = entry.Next
			}
			return entry
		}
	}

	return nil
}