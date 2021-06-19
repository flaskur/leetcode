// given an array that is sorted in non decreasing order, find two numbers that add up to target, returning indices 1 indexed.
func twoSum(numbers []int, target int) []int {
	i, j := 0, len(numbers)-1
	for i < j {
		sum := numbers[i] + numbers[j]
		if sum == target {
			return []int{i+1, j+1}
		} else if sum > target {
			j--
		} else if sum < target {
			i++
		}
	}
	return []int{0,0}
}