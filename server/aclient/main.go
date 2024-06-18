package main

import (
	"context"
	"fmt"
	"os"
	"time"

	pb "github.com/dav473/govpn/server/aserver/proto"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

type ClientToken struct{}

func (c ClientToken) GetRequestMetadata(ctx context.Context, uri ...string) (map[string]string, error) {
	return map[string]string{
		//	"token": os.Getenv("TOKEN"),
		"token": "123456",
	}, nil
}
func (c ClientToken) RequireTransportSecurity() bool {
	return true
}

func main() {
	path, _ := os.Getwd()
	creds, _ := credentials.NewClientTLSFromFile(path+"/../aserver/keys/server/serverx.crt", "localhost")
	conn, err := grpc.Dial("155.138.159.68:9090", grpc.WithTransportCredentials(creds))

	//conn, err := grpc.Dial("127.0.0.1:9090", grpc.WithTransportCredentials(insecure.NewCredentials()))

	// var options []grpc.DialOption
	// //options = append(options, grpc.WithTransportCredentials(insecure.NewCredentials()))
	// options = append(options, grpc.WithTransportCredentials(creds))
	// // ClientToken is just a type. WithPerRPCCredentials() needs an instance / or ptr
	// options = append(options, grpc.WithPerRPCCredentials(new(ClientToken)))

	// conn, err := grpc.Dial("0.0.0.0:9090", options...)

	if err != nil {
		fmt.Print(err.Error())
	}
	defer conn.Close()
	client := pb.NewSayHelloServiceClient(conn)
	stream, err := client.SayHello(context.Background(), &pb.SayHelloRequest{})
	if err != nil {
		fmt.Print(err.Error())
	}

	stop := time.NewTicker(time.Second * 10)
stopLoop:
	for {
		select {
		case <-stop.C:
			err := stream.CloseSend()
			if err != nil {
				fmt.Print(err.Error())
			}
			break stopLoop
		default:
			res, _ := stream.Recv()
			fmt.Println(res.ResponseMsg)
		}
	}
	fmt.Println("end")
}
