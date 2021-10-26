function alienOrder(words: string[]): string {
	// find all possible letters in dictionary
	let letters = new Set<string>()
	words.forEach(word => {
		for (let letter of word) {
			letters.add(letter)
		}
	})

	// populate adjacency list
	let graph = new Map<string, Set<string>>()
	for (let i = 0; i < words.length; i++) {
		for (let j = i + 1; j < words.length; j++) {
			// impossible case should return failure
			if (compare(graph, words[i], words[j])) return ''
		}
	}

	let visit = new Set<string>()
	let trip = new Set<string>()
	let order = []

	// topological sort
	for (let letter of graph.keys()) {
		// skip if already visited
		if (visit.has(letter)) continue

		// find if cycle
		if (helper(letter, graph, visit, trip, order)) {
			return ''
		}
	}

	// append leftover letters
	let leftover = [ ...letters ].filter(letter => !visit.has(letter))
	order = [ ...order, ...leftover ]

	return order.join('')
}

function helper(
	letter: string,
	graph: Map<string, Set<string>>,
	visit: Set<string>,
	trip: Set<string>,
	order: string[],
): boolean {
	// cycle exists => lexico fails
	if (trip.has(letter)) return true

	// already visited => skip operation
	if (visit.has(letter)) return false

	// mark letter
	visit.add(letter)
	trip.add(letter)

	// iterate through list of letters
	let direct = graph.has(letter) ? graph.get(letter).values() : []
	for (let l of direct) {
		if (helper(l, graph, visit, trip, order)) {
			return true
		}
	}

	// backtrack
	trip.delete(letter)

	// add order when no children
	order.unshift(letter)

	return false
}

function compare(graph: Map<string, Set<string>>, s: string, t: string): boolean {
	// find the first character difference and update directed graph
	let bound = s.length <= t.length ? s.length : t.length

	if (s.length > t.length && s.slice(0, bound) == t.slice(0, bound)) {
		return true
	}

	for (let i = 0; i < bound; i++) {
		// populate graph on letter diff => s is always less than t
		if (s[i] != t[i]) {
			if (!graph.has(s[i])) {
				let req = new Set<string>()
				req.add(t[i])
				graph.set(s[i], req)
			} else {
				graph.get(s[i]).add(t[i])
			}
			break
		}
	}

	return false
}
