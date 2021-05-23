package main

// given an array of integers and target, return indices of two nums such that they sum to target.
// func twoSum(nums []int, target int) []int {
// 	for i := 0; i < len(nums)-1; i++ {
// 		for j := i + 1; j < len(nums); j++ {
// 			if target == nums[i]+nums[j] {
// 				return []int{i, j}
// 			}
// 		}
// 	}

// 	return nil // solution guaranteed to exist
// }

// use hash map of num/index to keep track of existing nums that can match up to target
func twoSum(nums []int, target int) []int {
	indexMap := map[int]int{}

	for i, num := range nums {
		index, ok := indexMap[target-num]
		if ok {
			return []int{index, i}
		} else {
			indexMap[num] = i
		}
	}

	return nil
}
