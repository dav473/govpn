package main

import (
	"fmt"
	"math/rand"
	"net"
	"os"
	"time"

	pb "github.com/dav473/govpn/server/aserver/proto"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

type Server struct {
	pb.UnimplementedSayHelloServiceServer
}

func (s *Server) SayHello(req *pb.SayHelloRequest, stream pb.SayHelloService_SayHelloServer) error {
	//TODO:拦截器
	// Get meta data for authorization
	// md, ok := metadata.FromIncomingContext(stream.Context())
	// if !ok {
	// 	return errors.New("dafs")
	// }

	// token, ok := md["token"]

	// if !ok {
	// 	return errors.New("no token")
	// }

	// if token[0] != "123456" {
	// 	return errors.New("invalid token")
	// }

	timer := time.NewTicker(time.Millisecond * 3000)
	for {
		select {
		case <-stream.Context().Done():
			fmt.Println("Client disconnected")
			return nil
		case <-timer.C:
			rand.Seed(time.Now().UnixNano())
			randomFloat := rand.Float64() * 0.99
			responseMsg := fmt.Sprintf("%.2f", randomFloat)
			fmt.Printf("send message: %s\n", responseMsg)
			err := stream.Send(&pb.SayHelloResponse{ResponseMsg: responseMsg})
			if err != nil {
				return nil
			}
		}
	}
}
func main() {
	listen, _ := net.Listen("tcp", ":9090")
	path, _ := os.Getwd()
	creds, _ := credentials.NewServerTLSFromFile(path+"/keys/server/server.pem", path+"/keys/server/server.key")
	grpcServer := grpc.NewServer(grpc.Creds(creds))
	pb.RegisterSayHelloServiceServer(grpcServer, &Server{})
	err := grpcServer.Serve(listen)
	if err != nil {
		fmt.Printf("faild to serve: %v", err)
		return
	}
}
