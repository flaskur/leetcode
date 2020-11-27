/**
 * Customers buy lemonade with 5, 10, or 20 dollar bills. You start with 0 money. Check if you can provide exact change if all lemonades cost 5.
 * I think you need to implement a hash map for bill count for this case. Or, you only keep a count of 5 and 10 bills and recognize the change for 10 and 20. 20 can be either 10 + 5 or 5 + 5 + 5, but prioritize 10 if you can use it.
 */
class Solution {
	public boolean lemonadeChange(int[] bills) {
		// edge case
		if (bills.length == 0) return true;
		
		int fiveCount = 0;
		int tenCount = 0;

		for (int bill : bills) {
			switch (bill) {
				case 5:
					fiveCount += 1;
					break;
				case 10:
					if (fiveCount == 0) return false;
					fiveCount -= 1;
					tenCount += 1;
					break;
				case 20:
					if (tenCount >= 1 && fiveCount >= 1) {
						tenCount -= 1;
						fiveCount -= 1;
					} else if (fiveCount >= 3) {
						fiveCount -= 3;
					} else return false;
				default: break;
			}
		}

		return true;
	}
}