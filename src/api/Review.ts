import { ApiResponse } from "apisauce";
import apiClient from "./client";

const baseUrl = "/review";

type postReviewProps = {
  post_id: string;
  post: {
    rating: string | number;
    text: string;
  };
};

export async function postReview({ post_id, post }: postReviewProps) {
  await apiClient.post(baseUrl + `/${post_id}`, post);
}
