/**
 * Given a binary tree, return the inorder traversal of its nodes' values Remember that inorder is left mid right and it's how you would read it normally. If doing this recursively you would recursively call the left side, push the data value, then recursively call the right side. The populated array is the answer.
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
	// In this case you don't really need to use a helper method right?
	// Actually no because you need result in the global context. Actually you should probably pass it in as a parameter.

	let result = [];
	// Need to do this because the value needs to update right? Or when I do that I give the reference ot the array, so maybe not.
	helper(root, result);

	return result;
};
const helper = function(node, result) {
	if (node === null) return;

	helper(node.left, result);
	result.push(node.val);
	helper(node.right, result);
};
// The above solution works because I passed the array which works as an object reference in JS.

// Iterative solution? I thought there was a specific process to convert a recursive case to iterative. BFS is naturally iterative by using a queue and result array structure.
// Think about this logically... You are trying to do a depth first search without any recursion so we likely need some sort of memory. Maybe a variation of the queue method? Remember that BFS was done by taking a queue and working until it was empty. You start with the root and for each iteration you populate the queue with the left and right then process the top node. If this continues the queue order models a level approach. Height relates to the num edges to the deepest leaf. The depth relates to the num edges to the root. How do I model the depth first search with the queue? I pass the root and push the left. Just gonna look up the answer because it's more efficient just to check the answers. Oh, so the difference between the two is that one is prepend and one is append. The BFS is append as expected.
// Example -> DFS inorder I expect 4 6 8 10 15 18 21 22. BFS I expect 10 6 18 4 8 15 21 22.
// Going through the BFS again I have a queue starting with 10. The queue adds 6 18. 10 pushed to result array. 6 pushes so 18 4 8. Then 4 8 15 21. 21 pushes 22. Okay that makes perfect sense iteratively.
// The dfs starts with root of 10. It process by prepending to the queue so same case of 10 processed then 6 18. Then 6 processes into 4 8 18. 4 and 8 process. So currently the queue is 10 6 4 8 with 18 in the queue. This is preorder. How do I do pre or post order? Anyways, 18 process queue is filled with 15 21. 15 processes. 21 processes and adds 22. Okay so the preorder iterative dfs makes sense now. How do I do in and post order? Well for in order we expect 4 first, so maybe don't remove from queue immediately?
// 10 is in the queue first. It prepends 6 18. It is now 6 18 10. 6 processes into 4 8 6 18 10. 4 finishes so 8 6 18 10. 8 finishes. 6 finishes. Currently the results array is 4 8 6 and the queue is 18 10. 18 prepends to 15 21 18 10. 15 processes. 21 becomes 22 21 18 10. So the final result array should be 4 8 6 15 22 21 18 10. That is post order I think. Left right middle.

// ******* OVERVIEW SO FAR
// Okay so the iterative approach to do a preorder of middle left right by prepending the children but processing the root immediately. The iterative approach to post order of left right middle is by prepending the children but not processing the root at all.
// Hypothesis... Preorder is done with a queue that sets the left child as a prepend and the right child as an append. I'm pretty sure you wouldn't remove the one you visit first though. Quick break.

// Inorder attempt left middle right. Queue starts with 10, prepends left of 6 and appends right of 18. So now it's 6 10 18 without removing 10. Then 6 processes into 4 6 8 10 18. Wait but that means I don't appends, I just wrap the current. 4 has no children push onto result. 6 was already processed... do I need to mark that? It does have children so yeah. Assume we have it marked somehow and 6 is processed. 8 is processed with no children. 10 already marked. 15 18 21. 15 processes no children. 18 already done, process that. 21 22. 21 done process. 22 no children. Okay... so it works kinda, but it's really weird. I need some way to mark the node. I guess I could use a hash table but I want to avoid that because I expect to only have string keys and not node instances... So I could do the hash table method but that would be too much. Just look it up.
// They suggest a stack instead of a queue for the dfs. Wait but BFS adds in the back and processes in the front.
// In order is left middle right.

// Copying solution.
const inorderTraversal = function(root) {
	let result = [];
	let arr = [];
	// Apparently you need to use a current variable.
	let current = root;

	while (current !== null || arr.length !== 0) {
		while (current !== null) {
			arr.push(current);
			current = current.left;
		}
		current = arr.pop();
		result.push(current.val);
		current = current.right;
	}

	return result;
};
// current is set to 10. current is not null so arr pushes in 10. current becomes 6. arr pushes 6 and current becomes 4. 4 is pushed into arr and it's now 10 6 4 and current becomes null. So now current becomes 4, result pushes in 4 and current becomes null. current becomes 6 and result pushes into 4 6. current becomes 8. Current is not null so arr becomes 10 8 and then current becomes null. result pushes in 8. result pushes in 10 and current becomes 18. arr becomes null when arr is 18 15. Result is now 4 6 8 10 15 18 with current as 21. current becomes null. result pushes 21 into result. current becomes 22. Current pops 22. Then the while loop fails because current arr length is 0. Why do I need the case of current !== null. Backtrace so 4 6 8 10 15 18 21 with current equal to 22. Current becomes null. current pop to 22 again, result pushes in 22 so final is 4 6 8 10 15 18 21 22. Current is then null and array length is 0. So the iteration stops if current is null right?
