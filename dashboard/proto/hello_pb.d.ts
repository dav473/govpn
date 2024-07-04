// package: 
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ServerStatusRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ServerStatusRequest): ServerStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerStatusRequest;
    static deserializeBinaryFromReader(message: ServerStatusRequest, reader: jspb.BinaryReader): ServerStatusRequest;
}

export namespace ServerStatusRequest {
    export type AsObject = {
    }
}

export class ServerStatusResponse extends jspb.Message { 
    getUptime(): number;
    setUptime(value: number): ServerStatusResponse;
    getMemory(): number;
    setMemory(value: number): ServerStatusResponse;
    getDisk(): number;
    setDisk(value: number): ServerStatusResponse;
    getCpu(): number;
    setCpu(value: number): ServerStatusResponse;
    clearLoadList(): void;
    getLoadList(): Array<number>;
    setLoadList(value: Array<number>): ServerStatusResponse;
    addLoad(value: number, index?: number): number;

    hasNetwork(): boolean;
    clearNetwork(): void;
    getNetwork(): NetworkStatus | undefined;
    setNetwork(value?: NetworkStatus): ServerStatusResponse;

    hasCurrentNetwork(): boolean;
    clearCurrentNetwork(): void;
    getCurrentNetwork(): NetworkStatus | undefined;
    setCurrentNetwork(value?: NetworkStatus): ServerStatusResponse;
    getPing(): number;
    setPing(value: number): ServerStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ServerStatusResponse): ServerStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerStatusResponse;
    static deserializeBinaryFromReader(message: ServerStatusResponse, reader: jspb.BinaryReader): ServerStatusResponse;
}

export namespace ServerStatusResponse {
    export type AsObject = {
        uptime: number,
        memory: number,
        disk: number,
        cpu: number,
        loadList: Array<number>,
        network?: NetworkStatus.AsObject,
        currentNetwork?: NetworkStatus.AsObject,
        ping: number,
    }
}

export class NetworkStatus extends jspb.Message { 
    getUpload(): string;
    setUpload(value: string): NetworkStatus;
    getDownload(): string;
    setDownload(value: string): NetworkStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkStatus.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkStatus): NetworkStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkStatus;
    static deserializeBinaryFromReader(message: NetworkStatus, reader: jspb.BinaryReader): NetworkStatus;
}

export namespace NetworkStatus {
    export type AsObject = {
        upload: string,
        download: string,
    }
}
