// given a m x n integer grid matrix accounts, where i is customer index and j is bank index and accounts[i][j] is amount of money, return wealth that the richest customer has.
// so the brute force way to do this is to keep a variable and update it when the inner counter exceeds it, meaning we iterate for each customer for each bank. we care about the wealth amount, not the customer, so the operation is just max(sum(row))
// this doesn't seem very efficient though, maybe there is a better method. nope it's just straightforward brute force.
function maximumWealth(accounts: number[][]): number {
	let maxWealth = 0; // what about edge case, no customers?

	for (let i = 0; i < accounts.length; i++) {
		let customerWealth = 0;

		for (let j = 0; j < accounts[0].length; j++) {
			customerWealth += accounts[i][j];
		}

		if (customerWealth > maxWealth) {
			maxWealth = customerWealth;
		}
	}

	return maxWealth;
}
