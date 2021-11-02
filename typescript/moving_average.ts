class MovingAverage {
	window: number[]
	sum: number
	size: number

	constructor(size: number) {
		this.window = []
		this.sum = 0
		this.size = size
	}

	next(val: number): number {
		if (this.window.length == this.size) {
			this.sum -= this.window.shift()
		}
		this.window.push(val)
		this.sum += val

		return this.sum / this.window.length
	}
}
