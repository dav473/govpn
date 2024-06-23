import { NextRequest } from "next/server";
import { ServerStatusServiceClient } from "@/proto/hello_grpc_pb";
import { ServerStatusRequest, ServerStatusResponse } from "@/proto/hello_pb";
import { credentials } from "@grpc/grpc-js";
import { readFileSync } from "fs";


export async function GET(request: NextRequest) {
  const encoder = new TextEncoder();
  const transformStream = new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk);
    },
  });
  const writer = transformStream.writable.getWriter();
  let response = new Response(transformStream.readable);

  response.headers.set("Content-Type", "text/event-stream");
  response.headers.set("Cache-Control", "no-cache");
  response.headers.set("Connection", "keep-alive");
  response.headers.set("Transfer-Encoding", "chunked");

  const root_cert = readFileSync(process.cwd()+'/proto/ca.crt');
  const ssl_creds = credentials.createSsl(root_cert)

  const options = {
    'grpc.ssl_target_name_override' : 'localhost',
    'grpc.default_authority': 'localhost'
}
  const client = new ServerStatusServiceClient("127.0.0.1:9090", ssl_creds, options);
  const req = new ServerStatusRequest();
  const stream = client.serverStatus(req);

  stream.on("data", ( res: ServerStatusResponse) => {
    const result = ServerStatusResponse.deserializeBinary(res.serializeBinary())
    console.log(JSON.stringify(result.toObject()))
    const message = `data: ${result} \n\n`;
    const messageUint8Array = encoder.encode(message);
    writer.write(messageUint8Array)
  });

  stream.on("close", async () => {
    await writer.ready;
    await writer.close();

  })

   request.signal.addEventListener("abort", async() => {
    stream.destroy();
  });


  return response;
}
