function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
	// find the final end time
	let finalEndTime = -1
	endTime.forEach(time => {
		time > finalEndTime && (finalEndTime = time)
	})

	// dp[i] represents the max profit possible at that current time
	let dp = Array(finalEndTime + 1).fill(0)
	dp[0] = 0
	dp[1] = 0 // impossible to complete a job in 0 time, since all jobs start at time 1

	// idea is to choose either existing max profit which is dp[i-1]
	// or find a candidate that has this endtime i and take the max profit for that start time candidate
	for (let i = 2; i <= finalEndTime; i++) {
		// check for any candidates
		let j = 0
		while (j < endTime.length) {
			if (endTime[j] == i) {
				// choice is either keep existing profit, or take job + max profit at start time of job
				console.log(`time ${i} job ${j} prior ${dp[i - 1]} taking candidate ${profit[j]} + ${dp[startTime[j]]}`)
				dp[i] = Math.max(dp[i - 1], profit[j] + dp[startTime[j]])

				// remove candidate bc i will never use again
				startTime.splice(j, 1)
				endTime.splice(j, 1)
				profit.splice(j, 1)
				continue
			}
			j++
		}

		// if no candidates, take prev max profit
		dp[i] = Math.max(dp[i], dp[i - 1])
	}

	return dp[dp.length - 1]
}

// dp + binary search
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
	let jobs = []
	for (let i = 0; i < startTime.length; i++) {
		jobs.push([ startTime[i], endTime[i], profit[i] ])
	}
	jobs.sort((a, b) => a[1] - b[1])

	let dp = Array(jobs.length)
	dp[0] = jobs[0][2] // assign profit as just first job endtime profit

	for (let i = 1; i < dp.length; i++) {
		let profit = jobs[i][2]
		let l = search(jobs, i) // what are you searching for?

		if (l != -1) {
			profit += dp[l]
		}

		dp[i] = Math.max(profit, dp[i - 1])
	}

	return dp[dp.length - 1]
}

function search(jobs: number[][], i: number): number {
	let start = 0
	let end = i - 1 // it looks at the indices to the left of current index?

	while (start <= end) {
		let mid = ((start + end) / 2) | 0

		// end time is <= start time of current
		if (jobs[mid][1] <= jobs[i][0]) {
			// meaning the candidate end time is still <= the current start time
			if (jobs[mid + 1][1] <= jobs[i][0]) {
				start = mid + 1
			} else return mid
			// mid would be the first failure case then where a candidate end time is > current start time
		} else {
			end = mid - 1
		}
	}

	return -1
}
