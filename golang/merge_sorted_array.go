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

// without extra memory
func merge(nums1 []int, m int, nums2 []int, n int) {
	end := m + n - 1
	i := m - 1
	j := n - 1

	for i >= 0 && j >= 0 {
		if nums1[i] > nums2[j] {
			nums1[end] = nums1[i]
			i--
		} else {
			nums1[end] = nums2[j]
			j--
		}
		end--
	}

	if j >= 0 {
		copy(nums1[:end+1], nums2[:j+1])
	}
}