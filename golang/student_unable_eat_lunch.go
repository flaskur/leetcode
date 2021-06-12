// school cafeteria has circular and square sandwiches, matching number of students. sandwiches are placed in a stack and students are in a line. if student doesn't like it, moves to back of line. find number of students unable to eat.
func countStudents(students []int, sandwiches []int) int {
	failures := 0
	for failures < len(students) {
		if students[0] == sandwiches[0] {
			students = students[1:]
			sandwiches = sandwiches[1:]
			failures = 0
		} else {
			students = append(students[1:], students[0])
			failures++
		}
	}

	return failures
}