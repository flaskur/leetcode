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