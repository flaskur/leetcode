function countComponents(n: number, edges: number[][]): number {
	// to find number of isolated components, perform union find on all edges and decrement count for all unions
	let count = n
	let parents = [ ...Array(n).keys() ]
	let rank = Array(n).fill(1)

	edges.forEach(edge => {
		let x = find(parents, edge[0])
		let y = find(parents, edge[1])

		if (x != y) {
			if (rank[x] < rank[y]) {
				parents[x] = y
			} else {
				parents[y] = x
				rank[x]++
			}
			count--
		}
	})

	return count
}

function find(parents: number[], num: number): number {
	if (parents[num] == num) return num
	parents[num] = find(parents, parents[num])
	return parents[num]
}
