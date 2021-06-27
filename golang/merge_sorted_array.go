func merge(nums1 []int, m int, nums2 []int, n int) {
	nums := []int{}
	i := 0
	j := 0
	for i < m && j < n {
		if nums1[i] <= nums2[j] {
			nums = append(nums, nums1[i])
			i++
		} else {
			nums = append(nums, nums2[j])
			j++
		}
	}
	for i < m {
		nums = append(nums, nums1[i])
		i++
	}
	for j < n {
		nums = append(nums, nums2[j])
		j++
	}
	copy(nums1, nums)
}