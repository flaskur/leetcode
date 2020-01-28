/*
  Given a linked list, determine if it has a cycle in it.
  You are given pos which is a variable that tells you what index of the linked list the tail is connected to. This suggests that if the pos is less than the linked list length - 1 then there is a cycle in the list. Should do some error handling.

  The trick behind this is that a walker and runner pointer will meet if there exists a cycle. Think about it. It's a cycle so it will loop forever, it will definitely hit the same value at some point if the pacing is different.
*/
const hasCycle = function(head) {
	// A walker and runner will be the same node at some point if there is a cycle because they will circle around infinitely.
	if (head === null) return false;

	let walker = head;
	let runner = head;
	while (runner.next != null && runner.next.next != null) {
		walker = walker.next;
		runner = runner.next.next;
		if (walker === runner) return true;
	}

	return false;
};
