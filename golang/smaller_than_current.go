// given array of nums, for each num find how many nums are smaller than it.
// func smallerNumbersThanCurrent(nums []int) []int {
// 	smallerCount := make([]int, len(nums))

// 	countMap := map[int]int{}
// 	for _, num := range nums {
// 		countMap[num]++
// 	}

// 	for i, num := range nums {
// 		for key, val := range countMap {
// 			if num > key {
// 				smallerCount[i] += val
// 			}
// 		}
// 	}

// 	return smallerCount
// }

func smallerNumbersThanCurrent(nums []int) []int {
	smallerCount := make([]int, len(nums))

	for i := 0; i < len(nums); i++ {
		count := 0

		for j := 0; j < len(nums); j++ {
			if nums[i] > nums[j] {
				count++
			}
		}

		smallerCount[i] = count
	}

	return smallerCount
}