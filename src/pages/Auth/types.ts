import { array, object, ref, string } from "yup";

export type AuthType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  address?: address;
  number?: string;
};

export type ErrorType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  address?: string;
  number?: string;
};

export type address = {
  description: string;
  place_id: string;
  types: string[];
};

export const formSchema = object({
  firstName: string().required({
    from: "firstName",
    message: "First Name is required",
  }),
  lastName: string().required({
    from: "lastName",
    message: "Last Name is required",
  }),
  email: string().email().required({
    from: "email",
    message: "Email is required",
  }),
  password: string().required({
    from: "password",
    message: "Password is required",
  }),
  passwordConfirm: string()
    .oneOf([ref("password"), undefined], {
      from: "passwordConfirm",
      message: "Passwords do not match",
    })
    .required({
      from: "passwordConfirm",
      message: "Passwords do not match",
    }),
  address: object({
    description: string().required({
      from: "address",
      message: "Address is required",
    }),
    place_id: string(),
    types: array(string()),
  }),
});
