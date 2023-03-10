import { useEffect } from "react";
import { UserType } from "../config/types/User";
import { getUser, saveUser } from "../utils/SaveUser";
import useAuth from "./useAuth";

export default function useSaveUser() {
  const { user, setUser } = useAuth();

  useEffect(() => {
    let res = getUser();
    if (res) {
      setUser(JSON.parse(res));
    }
  }, []);

  useEffect(() => {
    if (user.email) return saveUser(JSON.stringify(user));
  }, [user]);
}
