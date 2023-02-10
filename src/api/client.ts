import { create } from "apisauce";
import { getAuthToken } from "../utils/AuthTokens";

const apiClient = create({
  baseURL: "http://api.3dlcreations.com",
});

apiClient.addAsyncRequestTransform(async (req) => {
  let authToken = getAuthToken();
  if (authToken) req.headers["x-auth-token"] = authToken;
});

export default apiClient;
