func canFinish(numCourses int, prerequisites [][]int) bool {
	graph := map[int][]int{}
	visit := map[int]bool{}
	trip := map[int]bool{}

	for _, preq := range prerequisites {
		want, need := preq[0], preq[1]
		graph[want] = append(graph[want], need)
	}

	// start at course i and check if cycle exists
	for i := 0; i < numCourses; i++ {
		if helper(i, graph, visit, trip) {
			return false
		}
	}

	// did not find any cycle
	return true
}

func helper(course int, graph map[int][]int, visit map[int]bool, trip map[int]bool) bool {
	// found a cycle
	if trip[course] {
		return true
	}

	// found node we already visited => skip
	if visit[course] {
		return false
	}

	visit[course] = true
	trip[course] = true

	// traverse through direct children of node
	for _, need := range graph[course] {
		// again check if cycle exists
		if helper(need, graph, visit, trip) {
			return true
		}
	}

	trip[course] = false // backtrack trip to avoid overlap

	return false
}