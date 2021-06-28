func countPrimes(n int) int {
	if n <= 2 {
		return 0
	}

	count := 0
	notPrime := make([]bool, n)
	notPrime[0], notPrime[1] = true, true

	for i := 2; i < n; i++ {
		if notPrime[i] {
			continue
		}

		// prime num found, eliminate all multiples of itself
		count++
		for j := i * 2; j < n; j += i {
			notPrime[j] = true
		}
	}

	return count
}