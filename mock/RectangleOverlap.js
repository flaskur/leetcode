/**
 * A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.
 * Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.
 * Given two (axis-aligned) rectangles, return whether they overlap.
 * I would start by finding the min and max x, y coordinates for both rectangles and then compare. This is all logic but super confusing at times. 
 * 
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function(rec1, rec2) {
	let min_x1 = rec1[0];
	let min_y1 = rec1[1];
	let max_x1 = rec1[2];
	let max_y1 = rec1[3];

	let min_x2 = rec1[0];
	let min_y2 = rec1[1];
	let max_x2 = rec1[2];
	let max_y2 = rec1[3];

	// max_x1 > min_x2 && (max_y1 > min)
	// Basically a rectangle overlaps in the x direction if the max right side is greater than the min left side. Or the min right side is less than the max right side. But this condition only works if the y also works.
	// Bro this is way too confusing. There must be a better way than just doing a bunch of mindless comparisons. See I don't know the sizing either and I'm assuming that the size is the same. Can I just compare the corners?
	// Just think about it in terms of the four corners. Fuck that's still confusing as hell.

	// if (
	//     (min_x1 < max_x2 && min_y1 < max_y2) && (max_x1 > min_x2 && max_y1 > min_y2) ||
	//     (max_x1 > min_x2 && max_y1 > min_y2) && (max_x1 )
	// )
};
