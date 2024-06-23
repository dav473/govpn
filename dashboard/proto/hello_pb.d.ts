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
    getResponseuptime(): string;
    setResponseuptime(value: string): ServerStatusResponse;
    getResponsememory(): string;
    setResponsememory(value: string): ServerStatusResponse;
    getResponsedisk(): string;
    setResponsedisk(value: string): ServerStatusResponse;
    getResponsecpu(): string;
    setResponsecpu(value: string): ServerStatusResponse;

    hasResponseload(): boolean;
    clearResponseload(): void;
    getResponseload(): SystemLoad | undefined;
    setResponseload(value?: SystemLoad): ServerStatusResponse;

    hasResponsenetwork(): boolean;
    clearResponsenetwork(): void;
    getResponsenetwork(): NetworkStatus | undefined;
    setResponsenetwork(value?: NetworkStatus): ServerStatusResponse;

    hasResponsecurrentnetwork(): boolean;
    clearResponsecurrentnetwork(): void;
    getResponsecurrentnetwork(): NetworkStatus | undefined;
    setResponsecurrentnetwork(value?: NetworkStatus): ServerStatusResponse;
    getResponseping(): number;
    setResponseping(value: number): ServerStatusResponse;

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
        responseuptime: string,
        responsememory: string,
        responsedisk: string,
        responsecpu: string,
        responseload?: SystemLoad.AsObject,
        responsenetwork?: NetworkStatus.AsObject,
        responsecurrentnetwork?: NetworkStatus.AsObject,
        responseping: number,
    }
}

export class SystemLoad extends jspb.Message { 
    clearStatusList(): void;
    getStatusList(): Array<number>;
    setStatusList(value: Array<number>): SystemLoad;
    addStatus(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemLoad.AsObject;
    static toObject(includeInstance: boolean, msg: SystemLoad): SystemLoad.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemLoad, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemLoad;
    static deserializeBinaryFromReader(message: SystemLoad, reader: jspb.BinaryReader): SystemLoad;
}

export namespace SystemLoad {
    export type AsObject = {
        statusList: Array<number>,
    }
}

export class NetworkStatus extends jspb.Message { 
    getUpload(): number;
    setUpload(value: number): NetworkStatus;
    getDownload(): number;
    setDownload(value: number): NetworkStatus;

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
        upload: number,
        download: number,
    }
}
