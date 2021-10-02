// TLE
func findOrder(numCourses int, prerequisites [][]int) []int {
	result := []int{}
	seen := map[int]bool{}

	// reqs is a map that hold all prerequisites for the course
	reqs := map[int][]int{}
	for _, req := range prerequisites {
		// there won't be duplicate prerequisites bc distinct pairs
		reqs[req[0]] = append(reqs[req[0]], req[1])
	}

	helper(numCourses, reqs, []int{}, seen, &result)
	return result
}

func helper(numCourses int, reqs map[int][]int, current []int, seen map[int]bool, result *[]int) {
	// base case
	if len(current) == numCourses {
		*result = make([]int, numCourses)
		copy(*result, current)
		return
	}

	// backtracking
	for i := 0; i < numCourses; i++ {
		// duplicate skip
		if _, ok := seen[i]; ok {
			continue
		}

		// attempt to take if all prerequisites are fulfilled
		// check that all prerequisites for this course are fulfilled
		success := true
		for _, course := range reqs[i] {
			if _, ok := seen[course]; !ok {
				success = false
				break
			}
		}

		// able to take course -> perform backtracking
		if success {
			current = append(current, i)
			seen[i] = true
			helper(numCourses, reqs, current, seen, result)
			current = current[:len(current)-1]
			delete(seen, i)
		}
	}
}

// graph
func findOrder(numCourses int, prerequisites [][]int) []int {
	// edge case
	if numCourses == 0 {
		return []int{}
	}

	// setup adjacency list graph
	graph := map[int][]int{}
	for _, preq := range prerequisites {
		want, need := preq[0], preq[1]
		graph[want] = append(graph[want], need)
	}

	// setup helper graph lists
	visit := map[int]bool{}
	trip := map[int]bool{} // for cycle detection
	order := []int{}

	// topological sort => choose random node, explore and process until no children
	for i := 0; i < numCourses; i++ {
		// skip node if already visited
		if visit[i] {
			continue
		}

		// could possibly be cycle, so check return bool val
		if helper(i, graph, visit, trip, &order) {
			return []int{}
		}
	}

	return order
}

func helper(course int, graph map[int][]int, visit, trip map[int]bool, order *[]int) bool {
	// cycle detected
	if trip[course] {
		return true
	}
	// base case => skip visited node
	if visit[course] {
		return false
	}

	// mark node
	visit[course] = true
	trip[course] = true

	// visit all children of node
	for _, need := range graph[course] {
		if helper(need, graph, visit, trip, order) {
			return []int{}
		}
	}

	// unmark node for this trip
	trip[course] = false

	// add to result because node no longer has any children to traverse
	*order = append(*order, course)

	// return false meaning we didn't find a cycle, move onto a new random node
	return false
}


