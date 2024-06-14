package utils

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

/*
* Get server memory info
 */
func GetMemInfo() string {
	return "mem info"
}

func GetCPUInfo() string {
	return "cpu info"
}

func GetDiskInfo() string {
	return "disk info"
}

func GetNetInfo() string {
	return "net info"
}

func GetUpTime() string {

	return "up time"
}

type Uptime struct {
	uptime, idle string
}

func ReadFromProc() (*Uptime, error) {
	file, err := os.Open("/proc/uptime")
	if err != nil {
		return nil, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	if !scanner.Scan() {
		fmt.Printf("end of file or there is an error")
	}
	uptime := strings.Fields(scanner.Text())[0]
	idle := strings.Fields(scanner.Text())[1]

	return &Uptime{uptime: uptime, idle: idle}, nil
}
