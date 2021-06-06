// given array of candies and int extraCandies, check if there is a way to distribute extraCandies so that each kid can have greatest amount of candies.
func kidsWithCandies(candies []int, extraCandies int) []bool {
	greatestCandies := candies[0]
	for _, candyCount := range candies {
		if candyCount > greatestCandies {
			greatestCandies = candyCount
		}
	}

	canGreatest := make([]bool, len(candies))

	for i, candyCount := range candies {
		if candyCount+extraCandies >= greatestCandies {
			canGreatest[i] = true // no assignment means defaults to false
		}
	}

	return canGreatest
}