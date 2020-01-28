import java.util.Random;

public class Solution {
  private int[] nums;

  public Solution(int[] nums) {
    this.nums = nums;
  }

  public int[] reset() {
    return this.nums;
  }

  public int[] shuffle() {
    if (this.nums == null)
      return null;
    int[] clone = this.nums.clone();

    int j;
    int temp;
    for (int i = 0; i < this.nums.length; i++) {
      j = (new Random()).nextInt(this.nums.length);
      temp = i;
      clone[i] = clone[j];
      clone[j] = clone[temp];
    }

    return clone;
  }
}
