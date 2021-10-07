func sortList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	left, right := split(head)
	left, right = sortList(left), sortList(right)
	return merge(left, right)
}

func split(head *ListNode) (*ListNode, *ListNode) {
	var prev *ListNode
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		prev = slow
		slow = slow.Next
		fast = fast.Next.Next
	}
	prev.Next = nil // split list by marking null
	return head, slow
}

func merge(left, right *ListNode) *ListNode {
	dummy := &ListNode{
		Val:  0,
		Next: nil,
	}
	current := dummy

	for left != nil && right != nil {
		if left.Val <= right.Val {
			current.Next = left
			left = left.Next
		} else if left.Val > right.Val {
			current.Next = right
			right = right.Next
		}
		current = current.Next
	}

	// guaranteed to have only 1 element left bc of how it's split
	if left != nil {
		current.Next = left
	}
	if right != nil {
		current.Next = right
	}

	return dummy.Next
}