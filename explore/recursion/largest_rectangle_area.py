# Given n non negative integers representing a histograms bar height with width of 1 for each bar, find the area of the largest rectangle.
# You would probably perform a min operation on a variable amount of arguments, which means you need to test each candidate list.
class Solution:
	def largestRectangleArea(self, heights: List[int]) -> int:
		# edge case
		if not heights:
			return 0

		largest_area = 0

		def helper(heights: List[int], current_bars: List[int], current_area: int, end: int, start: int) -> None:
			nonlocal largest_area
			
			print(current_bars)
			
			# bars are not concurrent so it cannot be helpful for area
			if start != end + 1:
				# print('nonconcurrent')
				return
			
			# base case is when adding a particular height doesn't increase the current area
			area = 0
			if current_bars:
				area = min(current_bars) * len(current_bars)
			if area <= current_area and current_bars:
				print('smaller area')
				return

			# it saves the greatest so far, but keeps going without return
			if area > current_area:
				largest_area = max(largest_area, area)
				print('large', largest_area)

			# we went through the entire list
			if start == len(heights):
				print('reached end')
				return

			# j represents the starting index that you haven't already checked or added
			for i in range(start, len(heights)):
				current_bars.append(heights[i])

				# only add it if it's concurrent
				if i == end + 1:
					helper(heights, current_bars, area, i, i+1) # try path with append of num
				elif len(current_bars) == 1:
					helper(heights, current_bars, area, i, i+1)

				current_bars.pop() # backtrack

			# mess up, can't have area if they aren't concurrent, you would have to keep track of end index and check that j = i - 1 or else return

		helper(heights, [], 0, -1, 0)

		return largest_area