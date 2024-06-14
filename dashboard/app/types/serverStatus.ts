import { z } from "zod";
import { LoadType, NetworkDataType } from "./type";

export type ServerStatusProp = {
    id:string;
    label:string;
    ip:string;
    uptime:number;
    cpu:number;
    memory:number;
    load:LoadType;
    network:NetworkDataType;
    disk:string;
    currentNetworkActivity:NetworkDataType;
    ping:number;
}

export const ServerStatusSchema = z.object({
    id: z.string(),
    label: z.string(),
    ip: z.string(),
    uptime: z.number(),
    cpu: z.number(),
    memory: z.number(),
    load:  z.array(z.number()).length(3),
    network: z.object({
        upload: z.number(),
        download: z.number(),
    }),
    disk: z.string(),
    currentNetworkActivity: z.object({
        upload: z.number(),
        download: z.number(),
    }),
    ping: z.number(),
});