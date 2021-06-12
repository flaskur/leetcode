// given an array of integers, sort the array by increasing frequency and if they have the same frequency, order them by decreasing value.
// func frequencySort(nums []int) []int {
// 	freq := map[int]int{}
// 	for _, num := range nums {
// 		freq[num]++
// 	}

// 	maxFreq := 0
// 	for _, count := range freq {
// 		if count > maxFreq {
// 			maxFreq = count
// 		}
// 	}

// 	// max freq is 100, so 101 to include 0 freq
// 	buckets := [101][]int{}
// 	for num, count := range freq {
// 		buckets[count] = append(buckets[count], num)
// 	}

// 	result := []int{}
// 	for i := 0; i <= maxFreq; i++ {
// 		if len(buckets[i]) > 0 {
// 			sort.Ints(buckets[i])
// 		}

// 		for j := len(buckets[i]) - 1; j >= 0; j-- {
// 			for k := 0; k < i; k++ {
// 				result = append(result, buckets[i][j])
// 			}
// 		}
// 	}

// 	return result
// }

func frequencySort(nums []int) []int {
	freq := map[int]int{}
	for _, num := range nums {
		freq[num]++
	}

	// x and y and indices not values
	sort.Slice(nums, func(x int, y int) bool {
		if freq[nums[x]] == freq[nums[y]] {
			return nums[x] > nums[y]
		}
		return freq[nums[x]] < freq[nums[y]]
	})

	return nums
}