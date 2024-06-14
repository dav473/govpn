"use client";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

import {  NetworkDataType } from "../../types/type";
import { Button } from "@/components/ui/button";
import {  Ellipsis } from "lucide-react";
import { ClientStatusSchema } from "@/app/types/clientStatus";
import NetworkInformationBar from "../../components/networkInformationBar";

type ClientStatusSchema = z.infer<typeof ClientStatusSchema>;

export const columns: ColumnDef<ClientStatusSchema>[] = [
  {
    accessorKey: "ip",
    header: "IP",
  },

  {
    accessorKey: "country",
    header: "Country",
  },  {
    accessorKey: "endpoint",
    header:"Endpoint",
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
    accessorKey: "lastHandshake",
    header: "Last Handshake",
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
