import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useAuth() {
  return useContext(UserContext);
}
