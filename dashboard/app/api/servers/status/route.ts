// TODO limit the # of connection from GO side
import { NextRequest } from "next/server";
import { ServerStatusRequest, ServerStatusResponse } from "@/proto/hello_pb";
import { getGRPCClient } from "@/app/utils/getGRPCClient";

export async function GET(request: NextRequest) {
  const transformStream = new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk);
    },
  });
  const response = new Response(transformStream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Transfer-Encoding": "chunked",
    },
  });
  // SSE
  const writer = transformStream.writable.getWriter();

  // GRPC
  const client = getGRPCClient();
  const req = new ServerStatusRequest();
  const stream = client.serverStatus(req);
  const encoder = new TextEncoder();

  const handleStreamEndOrError = async () => {
    console.log("server side error")
    await writer.ready;
    writer.close();
  };

  stream.on("data", (res: ServerStatusResponse) => {
    const message = `data: ${JSON.stringify(res.toObject())}\n\n`;
    writer.write(encoder.encode(message));
  });


  stream.on("end", handleStreamEndOrError);
  stream.on("error", handleStreamEndOrError);


  request.signal.addEventListener("abort", async () => {
    console.log("Client disconnected1");
    stream.cancel();
  });

  writer.closed.then(() => {
    console.log("Client disconnected2");

  }).catch((error) => {
    console.log("Error while closing the writer:", error);
  });

  return response;
}
