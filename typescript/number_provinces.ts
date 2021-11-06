function findCircleNum(isConnected: number[][]): number {
	// init roots (index = value) and rank (optimize find) arrays
	let roots = [ ...Array(isConnected.length).keys() ]
	let rank = Array(isConnected.length).fill(1)

	// perform union between on the connected nodes
	for (let i = 0; i < isConnected.length; i++) {
		for (let j = 0; j < isConnected[0].length; j++) {
			if (isConnected[i][j] == 0) continue
			union(roots, rank, i, j)
		}
	}

	// find all unique nums in roots
	let seen = new Set<number>()
	roots.forEach(root => {
		let realRoot = find(roots, root)
		seen.add(realRoot)
	})

	return seen.size
}

function find(roots: number[], x: number) {
	// continue to traverse up tree until value matches index => root
	if (x == roots[x]) return x
	return find(roots, roots[x])
}

function union(roots: number[], rank: number[], x: number, y: number) {
	let rootX = find(roots, x)
	let rootY = find(roots, y)

	// connect roots if they are not the same
	if (rootX != rootY) {
		// assigning root my rank to avoid linked list traversal
		if (rank[rootX] > rank[rootY]) {
			roots[rootY] = rootX // this only updates 1 it doesn't update all
			// this needs to run find over all of them again
		} else if (rank[rootX] < rank[rootY]) {
			roots[rootX] = rootY
		} else {
			// arbitrary so just choose one to be higher
			roots[rootY] = rootX
			rank[rootX]++
		}
	}
}

// dfs
function findCircleNum(isConnected: number[][]): number {
	let visit = Array<boolean>(isConnected.length).fill(false)
	let count = 0

	// for each row, perform dfs for all that are connected to it
	for (let i = 0; i < isConnected.length; i++) {
		if (visit[i] == false) {
			dfs(isConnected, visit, i)
			count++
		}
	}

	return count
}

function dfs(isConnected: number[][], visit: boolean[], row: number) {
	visit[row] = true

	// check through all the rows and mark visit
	for (let col = 0; col < isConnected[row].length; col++) {
		if (isConnected[row][col] == 1 && visit[col] == false) {
			dfs(isConnected, visit, col)
		}
	}
}
