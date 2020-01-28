/**
 * Reverse a singly linked list. They give you the function definition for the listNode which implies that each listNode is represented using a function.
 * That's really weird because I don't have any context for how to declare an instance of a function.
 * @param {ListNode} head
 * @return {ListNode} Do you want the new head?
 */
const reverseList = function(head) {
	let current = head;
	let prev = null;
	let next;

	while (current != null) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	// Returning the new head as prev since current stops at null.
	return prev;
};
/**
    The Typescript extension broke. Anyways, in JS we represented the list node using a function which is somewhat weird compared to the normal format of something like a struct connected using pointers.
    
    So the head represents a listNode but does that mean it was an instance of the function somehow? The body of the list node just sets the object instance values.

    In JS, everything is an object so to create an instance of a function, and by virtual a class, you would set some variable equal to new FuncName(constructArg). What's interesting is that you have to use new to make this instance. Think of functions as classes and structs.
 */
