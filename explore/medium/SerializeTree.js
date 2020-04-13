/**
 * Serialization is the process of converting a data structure or object into a sequence of bits. Design an algorithm to serialize and deserialize a binary tree.
 * Given a binary tree you should be able to convert to the level order form and vice versa.
 * 
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null; 
 * }
 */

/**
* Encodes a tree to a single string
* 
* @param {TreeNode} root
* @return {string}
*/
const serialize = function(root) {
	let result = [];
	let queue = [];
	if (!root) return '';

	queue.push(root);
	while (queue.length > 0) {
		let shifted = queue.shift();
		if (shifted.left) {
			queue.push(shifted.left);
			result.push(shifted.val);
		} else result.push(null);

		if (shifted.right) {
			queue.push(shifted.right);
			result.push(shifted.val);
		} else result.push(null);
	}

	console.log(result);
};

/**
* Decodes the encoded data to tree
* 
* @param {string} data
* @return {TreeNode}
*/
const deserialize = function(data) {};

var serializeHelper = function(root, lst) {
	if (!root) {
		lst.push('#');
	} else {
		lst.push(root.val);
		serializeHelper(root.left, lst);
		serializeHelper(root.right, lst);
	}
};
var serialize = function(root) {
	var lst = [];
	serializeHelper(root, lst);
	return lst.toString();
};
var deserializeHelper = function(lst) {
	if (lst.length < 1) {
		return null;
	}
	var val = lst.splice(0, 1);
	if (val[0] === '#') {
		return null;
	}
	var root = new TreeNode(parseInt(val));
	root.left = deserializeHelper(lst);
	root.right = deserializeHelper(lst);
	return root;
};
var deserialize = function(data) {
	if (!data || data.length === 0) {
		return null;
	}
	return deserializeHelper(data.split(','));
};
