import { address } from "../pages/Auth/types";
import { ApiResponse } from "apisauce";
import apiClient from "./client";
import { UserType } from "../config/types/User";
import { setAuthToken } from "../utils/AuthTokens";

const endPoint = "/auth/register";

type RegisterProps = {
  name: string;
  email: string;
  password: string;
  address: address;
};

type returnType = {
  authToken: string;
  user: UserType;
};

export async function postRegister(
  req: RegisterProps
): Promise<UserType | string | undefined> {
  let { data } = await apiClient.post<returnType | string>(endPoint, req);
  if (typeof data === "string" || !data) return data;

  setAuthToken(data.authToken);
  return data?.user;
}
