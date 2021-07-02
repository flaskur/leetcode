func subsetXORSum(nums []int) int {
	return helper(nums, 0, 0)
}

func helper(nums []int, index int, sum int) int {
	// base case --> walked through array
	if index == len(nums) {
		return sum
	}

	// recursive go down both paths of including/excluding current index number
	include := helper(nums, index+1, sum^nums[index])
	exclude := helper(nums, index+1, sum)

	// take sum of both paths
	return include + exclude
}

// using for loop
func subsetXORSum(nums []int) int {
	sum := 0
	helper(nums, 0, []int{}, &sum)
	return sum
}

func helper(nums []int, index int, list []int, sum *int) {
	temp := 0
	for _, num := range list {
		temp ^= num
	}
	*sum += temp

	// backtracking
	for i := index; i < len(nums); i++ {
		list = append(list, nums[i]) // add candidate
		helper(nums, i+1, list, sum)
		list = list[:len(list)-1] // remove candidate
	}
}