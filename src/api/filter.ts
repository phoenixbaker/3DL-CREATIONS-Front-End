import { ApiResponse } from "apisauce";
import { FilterType } from "../pages/Products/components/Filter";
import apiClient from "./client";

const baseURL = "/filter";

export async function getFilter(): Promise<ApiResponse<FilterType>> {
  return await apiClient.get<FilterType>(baseURL);
}
