/**
 * Write a class called RecentCounter to count the recent requests. Give it one method called ping which takes a parameter int t, where t represents time in milliseconds. The method will return the number of pings made 3000 ms ago until now. These bounds are inclusive at we should count the current ping as well.
 * Use the typical function prototyping instead of newer class based syntax.
 */
const RecentCounter = function() {
	// Instance variable
	this.queue = [];
};

RecentCounter.prototype.ping = function(t) {
	this.queue.push(t);

	// While the queue is empty
	while (this.queue.length && this.queue[0] < t - 3000) {
		this.queue.shift();
	}

	return this.queue.length;
};

// How exactly do I know a ping will occur?
