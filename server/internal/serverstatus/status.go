package serverstatus

import (
	"fmt"

	"github.com/shirou/gopsutil/v4/host"
	"github.com/shirou/gopsutil/v4/mem"
)

type ServerInfo struct {
	Uptime uint64
	Memory float64
}

func formatedString(v float64) string {
	formatted := fmt.Sprintf("%.2f", v)
	return formatted
}

func GetServerStatus() (ret ServerInfo) {
	//Uptime
	uptimeInfo, _ := host.Uptime()
	//Memory
	memInfo, _ := mem.VirtualMemory()

	ret = ServerInfo{
		Uptime: uptimeInfo,
		Memory: memInfo.UsedPercent,
	}
	return
}
