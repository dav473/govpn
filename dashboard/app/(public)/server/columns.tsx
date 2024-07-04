"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ServerStatusSchema } from "../../types/serverStatus";
import { z } from "zod";
import CusProgress from "./components/cus-progress";
import NetworkInformationBar from "../../components/networkInformationBar";
import { NetworkDataType } from "../../types/type";
import LoadInformationBar from "./components/loadInformationBar";
import { uptimeConverter } from "../../utils/uptimeConvetor";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

type ServerStatusSchema = z.infer<typeof ServerStatusSchema>;

export const columns: ColumnDef<ServerStatusSchema>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "uptime",
    header: "Uptime",
  },

  {
    accessorKey: "memory",
    header: () => {
      return <div className="text-center">Memory</div>;
    },
    cell: (cell) => {
      return <CusProgress value={cell.getValue() as number} />;
    },
  },
  {
    accessorKey: "disk",
    header: () => {
      return <div className="text-center">Disk</div>;
    },
    cell: (cell) => {
      return <CusProgress value={cell.getValue() as number} />;
    },
  },
  {
    accessorKey: "cpu",
    header: () => {
      return <div className="text-center">CPU</div>;
    },
    cell: (cell) => {
      return <CusProgress value={cell.getValue() as number} />;
    },
  },
  {
    accessorKey: "loadList",
    header: "Load Balance",
    cell: (cell) => {
      return <LoadInformationBar value={cell.getValue() as number[]} />;
    },
  },

  {
    accessorKey: "network",
    header: "Network",
    cell: (cell) => {
      return (
        <NetworkInformationBar
          value={cell.getValue() as NetworkDataType}
          type={0}
        />
      );
    },
  },
  {
    accessorKey: "currentNetwork",
    header: "Current Network Activity",
    cell: (cell) => {
      return (
        <NetworkInformationBar
          value={cell.getValue() as NetworkDataType}
          type={1}
        />
      );
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
      );
    },
  },
];
