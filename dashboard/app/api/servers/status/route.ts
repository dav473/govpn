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
  const writer = transformStream.writable.getWriter();

  const client = getGRPCClient();
  const req = new ServerStatusRequest();
  const stream = client.serverStatus(req);
  const encoder = new TextEncoder();

  const handleStreamEndOrError = async () => {
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
    stream.destroy();
  });
  return response;
}
