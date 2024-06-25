package main

import (
	"fmt"
	"net"
	"os"
	"time"

	pb "github.com/dav473/govpn/server/aserver/proto"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

type Server struct {
	pb.UnimplementedServerStatusServiceServer
}

func (s *Server) ServerStatus(req *pb.ServerStatusRequest, stream pb.ServerStatusService_ServerStatusServer) error {
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

			fmt.Printf("send message!\n")
			err := stream.Send(&pb.ServerStatusResponse{
				Uptime: 324,
				Memory: 11.5,
				Disk:   64.4,
				Cpu:    32.1,
				Load:   []float32{0.1, 0.2, 0.3},
				Network: &pb.NetworkStatus{
					Upload:   123,
					Download: 34,
				},
				CurrentNetwork: &pb.NetworkStatus{
					Upload:   123,
					Download: 34,
				},
				Ping: 123,
			})
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
	pb.RegisterServerStatusServiceServer(grpcServer, &Server{})
	err := grpcServer.Serve(listen)
	if err != nil {
		fmt.Printf("faild to serve: %v", err)
		return
	}
}
