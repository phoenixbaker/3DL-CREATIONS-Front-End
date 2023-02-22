import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

import { UserType } from "../config/types/User";

type UserContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

type UserContextProviderType = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<UserType>({} as UserType);
  const value = useMemo(() => ({ user, setUser }), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
