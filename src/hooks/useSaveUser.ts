import { useEffect } from "react";
import { getUser, saveUser } from "../utils/SaveUser";
import useAuth from "./useAuth";

export default function useSaveUser() {
  const { user } = useAuth();
  useEffect(() => {
    if (!user) return;
    saveUser(JSON.stringify(user));
  }, [user]);
}
