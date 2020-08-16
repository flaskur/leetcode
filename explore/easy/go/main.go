package main

import "fmt"

func main() {
	fmt.Println("hello")

	nums := []int{1, 1, 1, 2, 3, 3, 3, 3, 4}

	fmt.Println(removeDuplicates(nums))
}
