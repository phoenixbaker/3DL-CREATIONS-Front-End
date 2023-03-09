import React from "react";
import { Logo } from "../../components";
import useAuth from "../../hooks/useAuth";
import NavBarAccount from "./Components/NavBarAccount";

import NavBarLink from "./Components/NavBarLink";

export default function NavBar({ className }: { className?: string }) {
  return (
    <section
      className={`bg-primary-dark-blue h-16 w-full grid grid-cols-3 sticky top-0 z-50 ${className}`}
    >
      <Logo className="w-16 h-12 self-center m-2 ml-12" white />
      <nav className="flex h-full items-center justify-center mx-4 gap-x-4">
        <NavBarLink to="/" text="Home" />
        <NavBarLink to="/products" text="Products" />
        <NavBarLink to="/business" text="Business" />
        <NavBarLink to="/create" text="Create" />
      </nav>
      <nav className="justify-self-end mx-4">
        <NavBarAccount />
      </nav>
    </section>
  );
}
