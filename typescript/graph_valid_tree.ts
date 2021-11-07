function validTree(n: number, edges: number[][]): boolean {
	// in order to be a tree, all the nodes need to visited and no cycles can exist
	// format the graph as an adjacency list and traverse to check for cycles

	let graph = new Map<number, number[]>()
	edges.forEach(edge => {
		let need = edge[0]
		let want = edge[1]

		// needs to go both ways
		graph.has(need) ? graph.set(need, [ ...graph.get(need), want ]) : graph.set(need, [ want ])
		graph.has(want) ? graph.set(want, [ ...graph.get(want), need ]) : graph.set(want, [ need ])
	})

	let visit = new Set<number>()

	// traverses through graph and checks if any have cycle
	if (hasCycle(graph, visit, 0, -1)) return false

	// checks that all nodes are connected
	if (visit.size != n) return false

	return true
}

function hasCycle(graph: Map<number, number[]>, visit: Set<number>, node: number, parent: number): boolean {
	visit.add(node)

	let candidates = graph.has(node) ? graph.get(node) : []
	for (let want of candidates) {
		// cycle occurs if you visit something you've already seen that is not direct parent
		// call recursion on the want node to check entire graph
		if ((visit.has(want) && parent != want) || (!visit.has(want) && hasCycle(graph, visit, want, node))) {
			return true
		}
	}

	return false
}

// union find
function validTree(n: number, edges: number[][]): boolean {
	let parents = Array(n).fill(-1) // -1 is arbitrary => find returns the actual number

	for (let i = 0; i < edges.length; i++) {
		let x = find(parents, edges[i][0])
		let y = find(parents, edges[i][1])

		// both having the same root means there is a cycle
		if (x == y) return false

		parents[x] = y // decide to set y as the root parent of x
	}

	// check that edges are <= n bc cycle would exist otherwise
	return edges.length == n - 1
}

function find(parents: number[], num: number): number {
	if (parents[num] == -1) return num
	return find(parents, parents[num])
}
