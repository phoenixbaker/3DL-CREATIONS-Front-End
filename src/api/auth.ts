import { UserType } from "../config/types/User";
import { setAuthToken } from "../utils/AuthTokens";
import apiClient from "./client";

const endPoint = "/auth";

type postAuthType = {
  email: string;
  password: string;
};

type returnType = {
  authToken: string;
  user: UserType;
};

const postAuth = async ({
  email,
  password,
}: postAuthType): Promise<UserType | string | undefined> => {
  let { data } = await apiClient.post<returnType | string>(endPoint, {
    email,
    password,
  });
  if (typeof data === "string" || !data) return data;
  setAuthToken(data.authToken);
  return data.user;
};

export { postAuth };
