const solution = (isBadVersion: any) => {
	// given isBadVersion, a function that tells you if a version is bad

	// perform binary search, if mid is bad move end = mid, if mid is good move start = mid + 1
	// it will terminate after
	const firstBadVersion = (n: number): number => {
		let start = 1
		let end = n

		// when start == end, both must be pointing at failing version
		while (start < end) {
			let mid = ~~((start + end) / 2)
			if (isBadVersion(mid)) end = mid
			else start = mid + 1
		}

		return end
	}

	return firstBadVersion
}
