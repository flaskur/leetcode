// delete a node from a singly linked list, given access to the node that is to be deleted.
// if inbetween two nodes, you need the previous node reference to update next, but since you only have a reference to the node to be deleted, you cannot move backwards.
// the condition is that the deleted node must not be a tail node, meaning it must be head or inbetween, meaning node.next will never be undefined.
// instead of deleting normally, just overwrite the values with next val.
// func deleteNode(node *ListNode) {
// 	for node.Next != nil {
// 		node.Val = node.Next.Val

// 		// move pointer to next node if not second last node in list
// 		if node.Next.Next != nil {
// 			node = node.Next
// 		} else {
// 			node.Next = nil // not sure if this is correct way to set tail next
// 		}
// 	}
// }

// instead of overwriting all of them, just take the node.Next val and skip Next
func deleteNode(node *ListNode) {
	node.Val = node.Next.Val
	node.Next = node.Next.Next
}