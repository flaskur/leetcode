// greedy two pointer solution, basically starting from least to most greed, iterate through smallest to largest cookie and move both pointers on success and only cookie pointer on failure.
function findContentChildren(g: number[], s: number[]): number {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);

	let i = 0;
	let j = 0;
	// moves the cookie size on iteration
	for (; i < g.length && j < s.length; j++) {
		if (s[j] >= g[i]) {
			i += 1;
		}
		// i is index but also represents num of satisfied children
		// if a child cannot be satisfied by all cookies, terminates and ends
	}

	return i;
}
