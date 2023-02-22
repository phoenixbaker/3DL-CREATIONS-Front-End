import { useContext } from "react";
import { AuthContext } from "../context/AuthenticationContext";

export default function useLogIn() {
  return useContext(AuthContext);
}
