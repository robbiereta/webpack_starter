import serverless from "serverless-http";
import expressApp from "./api";

const functionName = "serverlessHttp"
const app = expressApp(functionName);

exports.handler= serverless(app);