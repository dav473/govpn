import { credentials } from "@grpc/grpc-js";
import { readFileSync } from "fs";
import { ServerStatusServiceClient } from "@/proto/hello_grpc_pb";

export const getGRPCClient = () => {
  const root_cert = readFileSync(
    process.cwd() + process.env.CERTIFICATION_PATH
  );
  const ssl_creds = credentials.createSsl(root_cert);

  const options = {
    "grpc.ssl_target_name_override": "localhost",
    "grpc.default_authority": "localhost",
  };
  const client = new ServerStatusServiceClient(
    "127.0.0.1:9090",
    ssl_creds,
    options
  );
  return client;
};
