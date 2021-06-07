// given a matrix image, flip the image horizontally, then invert it.
func flipAndInvertImage(image [][]int) [][]int {
	// flip images
	for i := 0; i < len(image); i++ {
		for j := 0; j < len(image[0])/2; j++ {
			image[i][j], image[i][len(image[i])-1-j] = image[i][len(image[i])-1-j], image[i][j]
		}
	}

	// invert xor
	for i := 0; i < len(image); i++ {
		for j := 0; j < len(image[0]); j++ {
			image[i][j] ^= 1
		}
	}

	return image
}