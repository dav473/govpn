// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// go get -u google.golang.org/protobuf/cmd/protoc-gen-go && go install google.golang.org/protobuf/cmd/protoc-gen-go && go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
//
// export PATH="$PATH:$(go env GOPATH)/bin"
// protoc --go_out=./proto --go-grpc_out=./proto ./proto/hello.proto
//
// npm install grpc_tools_node_protoc_ts --save-dev
// npm install @grpc/grpc-js
// protoc --plugin=protoc-gen-ts=../node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:. hello.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var hello_pb = require('./hello_pb.js');

function serialize_ServerStatusRequest(arg) {
  if (!(arg instanceof hello_pb.ServerStatusRequest)) {
    throw new Error('Expected argument of type ServerStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServerStatusRequest(buffer_arg) {
  return hello_pb.ServerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServerStatusResponse(arg) {
  if (!(arg instanceof hello_pb.ServerStatusResponse)) {
    throw new Error('Expected argument of type ServerStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServerStatusResponse(buffer_arg) {
  return hello_pb.ServerStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServerStatusServiceService = exports.ServerStatusServiceService = {
  serverStatus: {
    path: '/ServerStatusService/ServerStatus',
    requestStream: false,
    responseStream: true,
    requestType: hello_pb.ServerStatusRequest,
    responseType: hello_pb.ServerStatusResponse,
    requestSerialize: serialize_ServerStatusRequest,
    requestDeserialize: deserialize_ServerStatusRequest,
    responseSerialize: serialize_ServerStatusResponse,
    responseDeserialize: deserialize_ServerStatusResponse,
  },
};

exports.ServerStatusServiceClient = grpc.makeGenericClientConstructor(ServerStatusServiceService);
