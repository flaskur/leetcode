func numTrees(n int) int {
	// idea is to construct a tree using all roots
	// if you choose a root, how many nodes to the left are left? how many to the right are left?
	// if you have 0 nodes left then there is only one unique way
	// if you have 2 nodes left then you've already calculated that from dp

	dp := make([]int, n+1)
	dp[0], dp[1] = 1, 1
	for nodes := 2; nodes <= n; nodes++ {
		for root := 1; root <= nodes; root++ {
			// determine number of nodes on each side
			leftNodes, rightNodes := root-1, nodes-root
			dp[nodes] += dp[leftNodes] * dp[rightNodes] // multiplied because combinations
		}
	}

	return dp[n]
}