import { createContext, Dispatch, SetStateAction } from "react";
import { AuthType, ErrorType } from "../types";

type AuthContextType = {
  auth: AuthType;
  setAuth: Dispatch<SetStateAction<AuthType>>;
  error: ErrorType;
  setError: Dispatch<SetStateAction<ErrorType>>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
