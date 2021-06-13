// given an integer n, each number from 1 to n inclusive is group according to the sum of its digits. find how many groups have the largest size.
func countLargestGroup(n int) int {
	// 36 is max digit sum with 9999, 37 to include 0 for simplicity
	buckets := [37][]int{}

	for i := 1; i <= n; i++ {
		buckets[digitSum(i)] = append(buckets[digitSum(i)], i)
	}

	groups := 0
	largest := 0
	for i := 1; i < len(buckets); i++ {
		if len(buckets[i]) > largest {
			largest = len(buckets[i])
			groups = 1
		} else if len(buckets[i]) == largest {
			groups++
		}
	}

	return groups
}

func digitSum(num int) int {
	sum := 0
	for num > 0 {
		sum += num % 10
		num /= 10
	}
	return sum
}