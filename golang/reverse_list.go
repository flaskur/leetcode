// given the head of the linked list, return the reversed linked list.
// the important part here is remembering that you need to initialize nil for Next tail, also concept of moving the head but saving current head placement.
func reverseList(head *ListNode) *ListNode {
	var prev *ListNode = nil

	for head != nil {
		current := head
		head = head.Next
		current.Next = prev
		prev = current
	}

	return prev
}