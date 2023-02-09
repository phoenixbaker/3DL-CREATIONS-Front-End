import React, { useState } from "react";
import { motion } from "framer-motion";

import useAuth from "../../../hooks/useAuth";
import NavBarLink from "./NavBarLink";
import { UserType } from "../../../context/UserContext";
import { removeAuthToken } from "../../../utils/AuthTokens";

export default function NavBarAccount() {
  const { user, setUser } = useAuth();
  const [dropdown, setDropdown] = useState(false);

  function logOut() {
    removeAuthToken();
    setUser({} as UserType);
  }

  return (
    <>
      <div
        className="h-full flex items-center"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <NavBarLink
          to="/auth"
          text={user.name?.length ? `${user.name}` : "Account"}
        />
      </div>
      {user.name?.length && dropdown && (
        <motion.div
          animate={{
            opacity: [0, 1],
            transition: {
              duration: 0.3,
            },
          }}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          className="absolute p-4 pl-4 pr-12 bg-secondary-blue top-16 flex flex-col gap-y-6 rounded-b-2xl"
        >
          {user.dev && (
            <NavBarLink
              to="/dev"
              text="Dev Page"
              className="text-base font-bold"
            />
          )}
          <NavBarLink
            to="/account"
            text="My Account"
            className="text-base font-bold"
          />
          <NavBarLink
            to="/account"
            text="Account Info"
            className="text-base font-bold"
          />
          <NavBarLink
            to="/account"
            text="Order History"
            className="text-base font-bold"
          />
          <NavBarLink
            to="/account"
            text="Preferences"
            className="text-base font-bold"
          />
          <button
            className="text-white text-base font-bold text-left"
            onClick={() => logOut()}
          >
            Log Out
          </button>
        </motion.div>
      )}
    </>
  );
}
