func squareIsWhite(coordinates string) bool {
	// split coordinates, add together, if odd then white square
	// a should represent 1, so add 1

	coords := strings.Split(coordinates, "")
	x := int(coords[0][0]-'a') + 1
	y, _ := strconv.Atoi(coords[1])

	return (x+y)%2 == 1
}