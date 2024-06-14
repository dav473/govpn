package main

import (
	"fmt"
	"server/internal/utils"
)

func main() {
	info, _ := utils.ReadFromProc()
	fmt.Println(info)

}
