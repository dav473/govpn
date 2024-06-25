import { z } from "zod";
import {  NetworkDataType } from "./type";

export type ServerStatusType = {
    id:string;
    label:string;
    ip:string;
    uptime:number;
    cpu:number;
    memory:number;
    loadList:number[];
    network:NetworkDataType;
    disk:string;
    currentNetwork:NetworkDataType;
    ping:number;
}

export const ServerStatusSchema = z.object({
    id: z.string(),
    label: z.string(),
    ip: z.string(),
    uptime: z.number(),
    cpu: z.number(),
    memory: z.number(),
    loadList:  z.array(z.number()).length(3),
    network: z.object({
        upload: z.number(),
        download: z.number(),
    }),
    disk: z.string(),
    currentNetwork: z.object({
        upload: z.number(),
        download: z.number(),
    }),
    ping: z.number(),
});