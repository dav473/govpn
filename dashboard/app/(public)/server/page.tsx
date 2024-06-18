"use client";
import { serverStatus } from "../../data/data";
import DataTable from "../../components/data-table";
import { columns } from "./columns";
import { useEffect, useState } from "react";

export default function Page() {
  const [serverStatus, setServerStatus] = useState([
    {
      "id": "2c5946e3-2064-4b3b-b36a-9dc9f8b3d7fd",
      "label": "Server 1",
      "ip": "192.168.1.1",
      "uptime":3601,
      "cpu": 0.81,
      "memory": 0.24,
      "load": [0.72, 0.45, 0.88],
      "network": {
        "upload": 8792,
        "download": 17236
      },
      "disk": "1TB SSD",
      "currentNetworkActivity": {
        "upload": 5523,
        "download": 21439
      },
      "ping":332
    }]);
  useEffect(() => {
    const eventSource = new EventSource("/api/servers/status");
    eventSource.onmessage = function (event) {
        const updatedServerStatus = serverStatus.map((server) => ({
            ...server,
            memory: event.data
          }));
          setServerStatus(updatedServerStatus);
    };
  
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={serverStatus} />
    </div>
  );
}
