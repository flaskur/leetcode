/**
 * Given a perfect binary tree which means all parents have two children and the leaves terminate on the same level, we want to to set the next pointers for each node as the node to the right of the current one. If no node to the right, set to null.
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 * 
 * @param {Node} root
 * @return {Node}
 */
const connect = function(root) {
	// Well we know that each child will have the same parent. Actually that doesn't really help. I think you might have to do a breadth first search using a level approach, but then you would need to know when to set to null. Since we know it's a perfect tree, couldn't we use a counter? Okay, first attempt is doing a breadth first search and then setting the next pointers based on the counter.

	// BFS search done iteratively uses two arrays. One is for the final results, and the other is for the current queue. The idea is to push in the left and right child into the queue, then remove the one in the front and push into the results. This implies that you should remove from the front until the queue is empty. First goal is getting the array of Tree Nodes.

	// Edge case, empty tree.
	if (root === null) return root;

	let results = [];
	let queue = [];

	// We are pushing in the actually root instance, not the value. For printing we need to map the value for it to make sense.
	queue.push(root);

	while (queue.length !== 0) {
		let current = queue.shift();

		if (current.left) {
			queue.push(current.left);
			console.log(`pushed in ${current.left.val}`);
		}
		if (current.right) {
			queue.push(current.right);
			console.log(`pushed in ${current.right.val}`);
		}

		results.push(current);
	}

	results.map(function(result) {
		// Results is an array of nodes so result is just one node. You need to still access value for it to make sense.
		console.log(result.val);
	});

	// At this point you should add the right null logic based on a counter or modulus something.
	// We know that the 1, 2, 4, 8, ... nodes will have the right equal to null. Otherwise the next ones are nodes right next to it. I can just map through the results, but I need a way to tell when to Math pow by 2. When the last one is triggered.
	let mark = 1;
	let levelorder = 1;
	for (let i = 0; i < results.length; i++) {
		if (levelorder === mark) {
			results[i].next = null;
			mark *= 2;
			levelorder = 1;
		} else {
			// Will the last one be undefined? I should probably exclude it then.
			results[i].next = results[i + 1];
			levelorder += 1;
		}
	}

	return root;
};

// This works. The logic behind it is to use the BFS and realize that the pattern is the 1, 2, 4, 8, ... are the ones set to null. The other ones are just setting next to the i + 1 node which is easy since we already have level order from BFS. Pretty good.
