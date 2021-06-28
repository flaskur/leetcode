func canPlaceFlowers(flowerbed []int, n int) bool {
	if n == 0 {
		return true
	}

	if len(flowerbed) == 1 {
		if flowerbed[0] == 0 {
			return 1 >= n
		} else {
			return false
		}
	}

	spots, index := 0, 0

	for index < len(flowerbed) {
		switch index {
		case 0:
			if flowerbed[index] == 0 && flowerbed[index+1] == 0 {
				spots++
				index += 2
				continue
			}
		case len(flowerbed) - 1:
			if flowerbed[index] == 0 && flowerbed[index-1] == 0 {
				spots++
				index += 2
				continue
			}
		default:
			if flowerbed[index-1] == 0 && flowerbed[index] == 0 && flowerbed[index+1] == 0 {
				spots++
				index += 2
				continue
			}
		}

		index++

		if spots >= n {
			return true
		}
	}

	return spots >= n
}
