import { ApiResponse } from "apisauce";
import { FilterType } from "../config/types/Product";

import apiClient from "./client";

const baseURL = "/filter";

export async function getFilter(): Promise<ApiResponse<FilterType>> {
  return await apiClient.get<FilterType>(baseURL);
}
