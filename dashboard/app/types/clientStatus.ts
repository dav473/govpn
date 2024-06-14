import { z } from "zod";
import { LoadType, NetworkDataType } from "./type";

export type ClientStatusProp = {
    id:string;
    ip:string;
    endpoint:string;
    country:string;
    network:NetworkDataType;
    currentNetworkActivity:NetworkDataType;
    lastHandshake:string;
}

export const ClientStatusSchema = z.object({
    id: z.string(),
    ip: z.string(),
    endpoint: z.string(),
    country: z.string(),
    network: z.object({
        upload: z.number(),
        download: z.number(),
    }),
    currentNetworkActivity: z.object({
        upload: z.number(),
        download: z.number(),
    }),
    lastHandshake: z.string(),
});