package main

import (
	"fmt"
	"math/rand"
	"net"
	"os"
	"time"

	"github.com/dav473/govpn/server/internal/serverstatus"
	pb "github.com/dav473/govpn/server/proto"

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

			fmt.Printf("send message!!, %v\n", rand.Int31n(100))
			serverStatus := serverstatus.GetServerStatus()
			err := stream.Send(&pb.ServerStatusResponse{
				Uptime: serverStatus.Uptime,
				Memory: serverStatus.Memory,
				Disk:   rand.Float32(),
				Cpu:    rand.Float32(),
				Load:   []float32{rand.Float32(), rand.Float32(), rand.Float32()},
				Network: &pb.NetworkStatus{
					Upload:   uint64(rand.Uint32()),
					Download: uint64(rand.Uint32()),
				},
				CurrentNetwork: &pb.NetworkStatus{
					Upload:   uint64(rand.Uint32()),
					Download: uint64(rand.Uint32()),
				},
				Ping: uint64(rand.Uint32()),
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
