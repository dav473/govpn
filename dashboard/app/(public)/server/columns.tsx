"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ServerStatusSchema } from "../../types/serverStatus";
import { z } from "zod";
import CusProgress from "./components/cus-progress";
import NetworkInformationBar from "../../components/networkInformationBar";
import { LoadType, NetworkDataType } from "../../types/type";
import LoadInformationBar from "./components/loadInformationBar";
import { uptimeConverter } from "../../utils/uptimeConvetor";
import { Button } from "@/components/ui/button";
import { ChevronRight, Ellipsis } from "lucide-react";

type ServerStatusSchema = z.infer<typeof ServerStatusSchema>;

export const columns: ColumnDef<ServerStatusSchema>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "uptime",
    header: "Uptime",
    cell:  (cell) => {
      const { days, hours } = uptimeConverter(cell.getValue() as number);
      return ( <p>{days >0 && days +" d"} {hours} h</p>
      )
    }
  },

  {
    accessorKey: "memory",
    header: "Memory",
    cell: (cell) => {
      return <CusProgress value={cell.getValue() as number} />
    },
  },
  {
    accessorKey: "disk",
    header: "Disk",
    cell: (cell) => {
      return <CusProgress value={cell.getValue() as number} />
    },
  },
  {
    accessorKey: "cpu",
    header: "CPU",
    cell: (cell) => {
      return <CusProgress value={cell.getValue() as number} />
    },
  },
  {
    accessorKey: "load",
    header: "Load",
    cell: (cell) => {
      return <LoadInformationBar value={cell.getValue() as LoadType} />
    },
  },

  {
    accessorKey: "network",
    header: "Network",
    cell: (cell) => {
      return <NetworkInformationBar value={cell.getValue() as NetworkDataType} type={0} />
    },
  },
  {
    accessorKey: "currentNetworkActivity",
    header: "Current Network Activity",
    cell: (cell) => {
      return <NetworkInformationBar value={cell.getValue() as NetworkDataType} type={1} />
    },
  },
  {
    accessorKey: "ping",
    header: "Ping",
  },
  {
    header: "Actions",
    cell: (cell) => {
      return (
        <Button variant="ghost" size="icon">
        <Ellipsis size={16} />
      </Button>
      )
    },
  },
];
