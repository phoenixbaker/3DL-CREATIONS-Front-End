import { address } from "../../pages/Auth/types";
import { ReviewType } from "./Product";

export type UserType = {
  name: string;
  email: string;
  address: address;
  reviews: ReviewType[];
  cart: string[];
  dateCreated: string;
  lastEdited: string;
  dev: Boolean;
};
