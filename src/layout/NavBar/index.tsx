import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

import { Logo } from "../../components";
import useAuth from "../../hooks/useAuth";
import NavBarLink from "./NavBarLink";

export type NavBarProps = {
  page?:
    | "Home"
    | "Products"
    | "Business"
    | "Create"
    | "Account"
    | "Log In"
    | "Register";
};

export default function NavBar({ page = "Home" }: NavBarProps) {
  const { user } = useAuth();
  let [offset, setOffset] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let navigate = useNavigate();

  return (
    <section
      className={`duration-500 text-white text-2xl w-full grid grid-cols-3 sticky top-0 z-50 items-center ${
        offset > 0
          ? "bg-primary-dark-blue shadow-2xl"
          : "bg-primary-blue shadow-md"
      }`}
    >
      <Logo
        className={`duration-300 self-center ml-12 ${
          offset > 0 ? "w-20 h-16 my-3" : " w-24 h-20 my-5"
        } `}
        white
      />
      <nav className="flex justify-self-center gap-x-16 h-full">
        <NavBarLink page={page === "Home"} title="Home" to="/" />
        <NavBarLink page={page === "Products"} title="Products" to="/products">
          <h1 className="text-lg">Products</h1>
        </NavBarLink>
        <NavBarLink page={page === "Business"} title="Business">
          <h1 className="text-lg">Business</h1>
        </NavBarLink>
        <NavBarLink page={page === "Create"} title="Create">
          <h1 className="text-lg">Create</h1>
        </NavBarLink>
      </nav>
      <nav className="flex justify-self-end mr-12 gap-x-12">
        {user.name ? (
          <div className="flex gap-x-12">
            <NavBarLink page={page === "Account"} title={user.name} />
            <button className="bg-white flex items-center p-5 rounded-lg">
              <ShoppingCart
                className={`translate-y-1 scale-[1.6] duration-500 transition-colors ${
                  offset ? "text-primary-dark-blue" : "text-primary-blue"
                } `}
              />
            </button>
          </div>
        ) : (
          <>
            <h1>Log In</h1>
            <h1>Register</h1>
            <h1>Cart</h1>
          </>
        )}
      </nav>
    </section>
  );
}
