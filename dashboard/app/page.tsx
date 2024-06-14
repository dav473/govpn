import { SayHelloServiceClient } from "@/proto/hello_grpc_pb";
import { SayHelloRequest } from "@/proto/hello_pb";
import { credentials } from "@grpc/grpc-js";
import { readFileSync } from "fs";

export default function Home() {
  const root_cert = readFileSync(process.cwd()+'/proto/server.crt');
  const ssl_creds = credentials.createSsl(root_cert)

  const options = {
    'grpc.ssl_target_name_override' : 'localhost',
    'grpc.default_authority': 'localhost'
}
  const client = new SayHelloServiceClient("localhost:9090", ssl_creds, options);
  const req = new SayHelloRequest();
  const stream = client.sayHello(req);
  stream.on("data", ( response) => {
    const stats = response.toObject();
    console.log(stats)
  })


  return (
    <h1>Hi</h1>
  );
}
