"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ServerStatusSchema } from "../../types/serverStatus";
import { z } from "zod";
import CusProgress from "./components/cus-progress";
import NetworkInformationBar from "../../components/networkInformationBar";
import {  NetworkDataType } from "../../types/type";
import LoadInformationBar from "./components/loadInformationBar";
import { uptimeConverter } from "../../utils/uptimeConvetor";
import { Button } from "@/components/ui/button";
import {  Ellipsis } from "lucide-react";

type ServerStatusSchema = z.infer<typeof ServerStatusSchema>;

export const columns: ColumnDef<ServerStatusSchema>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "uptime",
    header:()=> (<div className="bg-red-500">Uptime</div>),
    size:200,
    cell:  (cell) => {
      const { days, hours } = uptimeConverter(cell.getValue() as number);
      return ( <div className="bg-red-300">{days >0 && days +" d"} {hours} h</div>
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
    accessorKey: "loadList",
    header: "Load Balance",
    cell: (cell) => {
      return <LoadInformationBar value={cell.getValue()} />
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
    accessorKey: "currentNetwork",
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
