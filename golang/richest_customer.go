// given a matrix of bank accounts, where each row array is an account, return max wealth among all accounts
func maximumWealth(accounts [][]int) int {
	maxWealth := 0

	for i := 0; i < len(accounts); i++ {
		accountWealth := 0
		for j := 0; j < len(accounts[0]); j++ {
			accountWealth += accounts[i][j]
		}

		if accountWealth > maxWealth {
			maxWealth = accountWealth
		}
	}

	return maxWealth
}