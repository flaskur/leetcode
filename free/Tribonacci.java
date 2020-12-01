/**
 * Tribonacci sequence is sum of previous 3 instead of 2, where t0=0, t1=1, and t2=1.
 * Good idea to do this recursively where base case is when n <= 2, otherwise return the recursive call with the triple sum.
 * You should memoize this solution to make it more efficient. Create a hash map and assign results.
 */
import java.util.HashMap;
class Solution {
	HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
	public int tribonacci(int n) {
		if (map.containsKey(n)) return map.get(n);

		// base cases
		if (n == 0) return 0;
		if (n == 1 || n == 2) return 1;

		int result = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
		map.put(n, result); // caching
		return result;
	}
}