// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protoc --go_out=. hello.proto
// protoc --go-grpc_out=. hello.proto
//
// protoc --go_out=. --go-grpc_out=. hello.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var hello_pb = require('./hello_pb.js');

function serialize_SayHelloRequest(arg) {
  if (!(arg instanceof hello_pb.SayHelloRequest)) {
    throw new Error('Expected argument of type SayHelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SayHelloRequest(buffer_arg) {
  return hello_pb.SayHelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SayHelloResponse(arg) {
  if (!(arg instanceof hello_pb.SayHelloResponse)) {
    throw new Error('Expected argument of type SayHelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SayHelloResponse(buffer_arg) {
  return hello_pb.SayHelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SayHelloServiceService = exports.SayHelloServiceService = {
  sayHello: {
    path: '/SayHelloService/SayHello',
    requestStream: false,
    responseStream: true,
    requestType: hello_pb.SayHelloRequest,
    responseType: hello_pb.SayHelloResponse,
    requestSerialize: serialize_SayHelloRequest,
    requestDeserialize: deserialize_SayHelloRequest,
    responseSerialize: serialize_SayHelloResponse,
    responseDeserialize: deserialize_SayHelloResponse,
  },
};

exports.SayHelloServiceClient = grpc.makeGenericClientConstructor(SayHelloServiceService);
