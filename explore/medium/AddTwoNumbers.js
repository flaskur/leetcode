/**
 * Given two non empty linked lists representing two non negative integers. The digits are stored in revverse order and each node contains a single digit. Add the two numbers and return it as a linked list. No leading zeros.
 *  2->4->3 + 5->6->4 represents 7->0->8. That makes sense because 342 + 465 = 
 * So the obvious solution here is to build two strings from each linked list and then convert it to an integer before adding. However, similar to the other problems, you'll have issues with the number overflow when a number cannot be represented.
 * You need to return a linked list so I would just overwrite the l1 linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
	// Edge cases?
	if (l1 === null && l2 === null) return null;
	else if (l1 !== null && l2 === null) return l1;
	else if (l1 === null && l2 !== null) return l2;

	let num1 = '';
	let num2 = '';
	let current1 = l1;
	let current2 = l2;
	while (current1 !== null) {
		num1 += current1.val.toString();
		console.log(`num1 is now ${num1}`);
		current1 = current1.next;
	}
	while (current2 !== null) {
		num2 += current2.val.toString();
		console.log(`num2 is now ${num2}`);
		current2 = current2.next;
	}
	console.log(`before reverse num1 ${num1} num2 ${num2}`);

	// Let it stay as the array reversed version so we can add them. Remember that it's an array of characters that represent numbers, so you still need to parseInt later.
	num1 = [ ...num1 ].reverse();
	num2 = [ ...num2 ].reverse();
	console.log(`array form num1 ${num1} num2 ${num2}`);

	// Problem here occurs when I try to convert the string to an integer for the number that cannot be represented as an integer and thus it tunrs into 1e+30 which I can't add. Can I add while keeping it as a string? Or do I have to deal with the overflow issue somehow? I did this before. Yeah... We could do the carry logic thing.

	// You can use two pointers i and j which start at num1.length - 1 and num2.length2. Continue to unshift onto a results array until one of num1 or num2 is empty. You also must consider the carry value.
	let result = [];
	let carry = 0;
	while (num1.length > 0 && num2.length > 0) {
		let n1 = parseInt(num1.pop(), 10);
		let n2 = parseInt(num2.pop(), 10);
		let digit = carry + n1 + n2;
		console.log(`digit is ${digit}`);
		if (digit >= 10) {
			console.log(`digit ${digit} overflow, carry 1`);
			carry = 1;
		} else carry = 0;
		result.unshift(digit % 10);
		console.log(`result is now ${result}`);
	}
	while (num1.length > 0) {
		let n1 = parseInt(num1.pop(), 10);
		let digit = carry + n1;
		console.log(`digit is ${digit}`);
		if (digit >= 10) {
			console.log(`digit ${digit} overflow, carry 1`);
			carry = 1;
		} else carry = 0;
		result.unshift(digit % 10);
		console.log(`result is now ${result}`);
	}
	while (num2.length > 0) {
		let n2 = parseInt(num2.pop(), 10);
		let digit = carry + n2;
		console.log(`digit is ${digit}`);
		if (digit >= 10) {
			console.log(`digit ${digit} overflow, carry 1`);
			carry = 1;
		} else carry = 0;
		result.unshift(digit % 10);
		console.log(`result is now ${result}`);
	}

	if (carry === 1) {
		console.log('final carry');
		result.unshift(carry);
	}

	// Result should now be an array that is added properly. We want to iterate through it and build the linked list.

	console.log(`result as an ARRAY ${result}`);

	// Now we populate a linked list. However, what if we need more? Carry case means we need to make another node. I don't want to do an overflow check, but then I would need to create a whole new linked list. How do I declare that?
	let head;
	let tail;
	while (result.length > 0) {
		if (!head) {
			let newNode = new ListNode(result.shift());
			console.log('result is now', result);
			head = newNode;
			tail = newNode;
		} else {
			let newNode = new ListNode(result.shift());
			console.log(`result is now ${result}`);
			tail.next = newNode;
			tail = newNode;
		}
	}

	console.log(`result should be empty as ${result}`);

	console.log('Iterate through the linked list to show that the values are correct');
	let iter = head;
	while (iter !== null) {
		console.log(iter.val);
		iter = iter.next;
	}

	console.log(`It's actually reverse logic, so test the reverse a linked list problem`);

	let rev = head;
	head = tail;

	let next;
	let prev = null;
	while (rev !== null) {
		next = rev.next;
		rev.next = prev;
		prev = rev;
		rev = next;
	}

	// You return the head node instance.
	return head;
};

// This one works but is pretty verbose and overcomplicated. I first converted the linked lists into arrays so I can process better. I can't use integer conversion because that fails the max integer limits. Instead I just built the result by working in reverse order for both arrays and keeping track of the carry. It's somewhat similar to the merge sort step. So if you ever have an issue with integer type conversion because of limits, know that there is an option of just representing the number as an array and adding using a carry.

// Based on the discussions, you didn't need to convert it to an array and you probably made it more complicated by doing so. The list logic is still similar though with the carry and sum.
