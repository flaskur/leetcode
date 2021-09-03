func getIntersectionNode(headA, headB *ListNode) *ListNode {
	visited := map[*ListNode]bool{}
	current := headA
	for current != nil {
		visited[current] = true
		current = current.Next
	}
	current = headB
	for current != nil {
		if _, ok := visited[current]; ok {
			return current
		}
		current = current.Next
	}
	return nil
}

// constant memory
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	// trick is to use len of both paths and set offset to be the same for both
	// we are only moving the head pointers, not modifying linked lists

	// find len of both paths
	lenA, lenB := 0, 0
	current := headA
	for current != nil {
		lenA++
		current = current.Next
	}
	current = headB
	for current != nil {
		lenB++
		current = current.Next
	}

	// move pointers so that they intersect at same distance
	for lenA < lenB {
		headB = headB.Next
		lenB--
	}
	for lenA > lenB {
		headA = headA.Next
		lenA--
	}

	// move to intersection or fail when both nil
	for headA != headB {
		headA = headA.Next
		headB = headB.Next
	}

	// return intersection
	if headA != nil {
		return headA
	}
	return nil
}