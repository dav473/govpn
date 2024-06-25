"use client";
import { serverStatus } from "../../data/data";
import DataTable from "../../components/data-table";
import { columns } from "./columns";
import { useEffect, useState } from "react";
import { ServerStatusType } from "@/app/types/serverStatus";

export default function Page() {
  const [serverStatus, setServerStatus] = useState<ServerStatusType[]>([]);
  useEffect(() => {
    const eventSource = new EventSource("/api/servers/status");
    eventSource.onmessage = function (event) {
      const parsedServerStatus = JSON.parse(event.data);
      const serverStatus: ServerStatusType = {
        ...parsedServerStatus,
        id: "id",
        ip: "ip",
        label: "label",
      };
      setServerStatus([serverStatus]);
      console.log(serverStatus);
    };
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={serverStatus} />
    </div>
  );
}
