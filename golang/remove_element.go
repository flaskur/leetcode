func removeElement(nums []int, val int) int {
	i := 0
	j := 0 // represents placeholder for nonval
	for i < len(nums) {
		if nums[i] != val {
			nums[j], nums[i] = nums[i], nums[j]
			j++
		}
		i++
	}
	return j
}