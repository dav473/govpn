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
				ResponseUptime: "123",
				ResponseMemory: "Memory Info",
				ResponseDisk:   "Disk Info",
				ResponseCpu:    "Cpu Info",
				ResponseLoad: &pb.SystemLoad{
					Status: []float32{0.32, 0.56, 0.66},
				},
				ResponseNetwork: &pb.NetworkStatus{
					Upload:   123,
					Download: 34,
				},
				ResponseCurrentNetwork: &pb.NetworkStatus{
					Upload:   123,
					Download: 34,
				},
				ResponsePing: 123,
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
