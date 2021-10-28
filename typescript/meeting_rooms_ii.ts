function minMeetingRooms(intervals: number[][]): number {
	// find max interval bound
	let bound = intervals[0][1]
	intervals.forEach(interval => {
		if (interval[1] > bound) {
			bound = interval[1]
		}
	})

	// setup buckets
	let buckets = Array(bound + 1).fill(0)

	// range through each interval and fill buckets
	intervals.forEach(interval => {
		for (let i = interval[0]; i < interval[1]; i++) {
			buckets[i]++
		}
	})

	// find the max bucket
	let maxBucket = buckets[0]
	for (let i = 1; i <= bound; i++) {
		if (buckets[i] > maxBucket) {
			maxBucket = buckets[i]
		}
	}

	return maxBucket
}

function minMeetingRooms(intervals: number[][]): number {
	// idea behind this is to sort first, then attempt to use a room if available
	// if there are no available rooms then add another one with new interval

	let rooms = []

	intervals.sort((a, b) => a[0] - b[0])

	for (let interval of intervals) {
		let added = false

		for (let room of rooms) {
			// already sorted so check if last interval clashes with current start time
			if (room[room.length - 1][1] <= interval[0]) {
				room.push(interval)
				added = true
				break
			}
		}

		if (!added) rooms.push([ interval ])
	}

	return rooms.length
}
