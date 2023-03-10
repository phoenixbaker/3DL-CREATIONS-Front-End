import { create } from "apisauce";
import { getAuthToken } from "../utils/AuthTokens";

const apiClient = create({
  baseURL: "https://api.3dlcreations.com/",
  // baseURL: "http://localhost:3001/",
});

apiClient.addAsyncRequestTransform(async (req) => {
  let authToken = getAuthToken();
  if (authToken) req.headers["x-auth-token"] = authToken;
});

export default apiClient;
