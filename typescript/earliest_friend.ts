function earliestAcq(logs: number[][], n: number): number {
	// logs are not guaranteed to be sorted
	logs.sort((a, b) => a[0] - b[0])

	// everyone becomes friends when all the nodes are connected which can be determined using union find and keeping a count
	let root = [ ...Array(n).keys() ]
	let rank = Array(n).fill(1)
	let count = n

	for (let log of logs) {
		let time = log[0]
		let x = log[1]
		let y = log[2]

		// you should only decrement count if a union occurs meaning they don't have the same root
		let rootX = find(root, x)
		let rootY = find(root, y)

		if (rootX != rootY) {
			// union the roots, not x and y bc find already sets
			union(root, rank, rootX, rootY)
			count--
		}

		if (count <= 1) return time
	}

	return -1
}

function find(root: number[], num: number): number {
	if (root[num] == num) return num
	root[num] = find(root, root[num])
	return root[num]
}

function union(root: number[], rank: number[], x: number, y: number) {
	if (rank[x] < rank[y]) {
		root[x] = y
	} else {
		root[y] = x
		rank[x]++
	}
}
