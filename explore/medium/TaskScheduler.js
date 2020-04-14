/**
 * Given a char array representing tasks for CPU which are A-Z. The same task requires a cooling period n. Find the least number of intervals to finish all tasks.
 */
const leastInterval = function leastInterval(tasks, n) {
	if (n === 0) return tasks.length;

	const map = {};
	for (let t of tasks) {
		if (map[t] == null) map[t] = 0;
		map[t]++;
	}

	let max = 0; // task max frequency
	for (let t in map) {
		max = Math.max(max, map[t]);
	}

	let count = 0; // the number of tasks with same max frequency
	for (let t in map) {
		if (map[t] === max) {
			count++;
		}
	}

	return Math.max(
		// case 1
		// AB...AB... = (max - 1) * (n + 1)
		// AB...AB...AB = (max - 1) * (n + 1) + count
		(max - 1) * (n + 1) + count,
		// case 2
		// e.g. (ABC)(ABD)(ABEF)
		tasks.length
	);
};
