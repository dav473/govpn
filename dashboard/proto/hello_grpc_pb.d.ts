// package: 
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as hello_pb from "./hello_pb";

interface IServerStatusServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    serverStatus: IServerStatusServiceService_IServerStatus;
}

interface IServerStatusServiceService_IServerStatus extends grpc.MethodDefinition<hello_pb.ServerStatusRequest, hello_pb.ServerStatusResponse> {
    path: "/ServerStatusService/ServerStatus";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<hello_pb.ServerStatusRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.ServerStatusRequest>;
    responseSerialize: grpc.serialize<hello_pb.ServerStatusResponse>;
    responseDeserialize: grpc.deserialize<hello_pb.ServerStatusResponse>;
}

export const ServerStatusServiceService: IServerStatusServiceService;

export interface IServerStatusServiceServer extends grpc.UntypedServiceImplementation {
    serverStatus: grpc.handleServerStreamingCall<hello_pb.ServerStatusRequest, hello_pb.ServerStatusResponse>;
}

export interface IServerStatusServiceClient {
    serverStatus(request: hello_pb.ServerStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.ServerStatusResponse>;
    serverStatus(request: hello_pb.ServerStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.ServerStatusResponse>;
}

export class ServerStatusServiceClient extends grpc.Client implements IServerStatusServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public serverStatus(request: hello_pb.ServerStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.ServerStatusResponse>;
    public serverStatus(request: hello_pb.ServerStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.ServerStatusResponse>;
}
