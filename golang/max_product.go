// given an array of integers, choose different indices and return the max value.
func maxProduct(nums []int) int {
	sort.Ints(nums)
	return (nums[len(nums)-2] - 1) * (nums[len(nums)-1] - 1)
}