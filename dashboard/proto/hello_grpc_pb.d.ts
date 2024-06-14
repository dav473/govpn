// package: 
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as hello_pb from "./hello_pb";

interface ISayHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: ISayHelloServiceService_ISayHello;
}

interface ISayHelloServiceService_ISayHello extends grpc.MethodDefinition<hello_pb.SayHelloRequest, hello_pb.SayHelloResponse> {
    path: "/SayHelloService/SayHello";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<hello_pb.SayHelloRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.SayHelloRequest>;
    responseSerialize: grpc.serialize<hello_pb.SayHelloResponse>;
    responseDeserialize: grpc.deserialize<hello_pb.SayHelloResponse>;
}

export const SayHelloServiceService: ISayHelloServiceService;

export interface ISayHelloServiceServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleServerStreamingCall<hello_pb.SayHelloRequest, hello_pb.SayHelloResponse>;
}

export interface ISayHelloServiceClient {
    sayHello(request: hello_pb.SayHelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.SayHelloResponse>;
    sayHello(request: hello_pb.SayHelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.SayHelloResponse>;
}

export class SayHelloServiceClient extends grpc.Client implements ISayHelloServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: hello_pb.SayHelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.SayHelloResponse>;
    public sayHello(request: hello_pb.SayHelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hello_pb.SayHelloResponse>;
}
