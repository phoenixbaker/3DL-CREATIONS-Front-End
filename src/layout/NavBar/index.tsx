import React from "react";
import useAuth from "../../hooks/useAuth";
import NavBarAccount from "./Components/NavBarAccount";

import NavBarLink from "./Components/NavBarLink";

export default function NavBar() {
  return (
    <section className="bg-primary-dark-blue h-16 w-full">
      <nav className="flex h-full items-center justify-end mx-4">
        <NavBarLink to="/" text="Home" />
        <NavBarLink to="/products" text="Products" />
        <NavBarAccount />
      </nav>
    </section>
  );
}
