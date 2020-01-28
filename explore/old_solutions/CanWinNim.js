/**
 * Nim Game. Heap of stone on the table and you can remove 1 to 3 stones. The one who removes the last stone will be the winner. You have the first turn.
 * Assume optimal strategies for the game. Write a function to determine if you can win the game given the number of stones in the heap.
 * What are the condition in which you cannot win? When there are only 3 or less left after taking it meaning it is impossible to win if the opponent uses the optimal strategy.
 * So the goal is to force the other person into an instance where there are 3 to 1 left.
 * For 5, you can take 1 and leave 4, forcing a win.
 * For 6, take 2. Forces a win. For 7, take 3, forcing a win.
 * For 8 if you take 3, then the opponent takes 1 and forces a win. If you take 1, then opponent takes 3 and automatically wins. You cannot win on 8.
 * For 9 if you take 1, it goes to 8 case for the opponent which they cannot win.
 * For 10 if you take 2 it also goes to 8 case.
 * I think one possible solution is forcing the opponent onto a number that is divisble by 4. The person that takes the turn on 8 cannot win otherwise it works.
 * For 12, I take 1 stone goes to 11. Opponent takes 3 stones goes to 8. I take 2 stones goes to 6. Opponent takes 2 stones goes to 4, automatically lose.
 * 
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function(n) {
	if (n % 4 === 0) return false;
	else if (n > 0) return true;
	else {
		console.log('invalid n', n);
		return true;
	}
};
