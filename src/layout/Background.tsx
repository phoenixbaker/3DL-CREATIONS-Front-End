import React, { ReactNode } from "react";
import NavBar, { NavBarProps } from "./NavBar";

export default function Background({
  page,
  children,
}: {
  page: NavBarProps["page"];
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <NavBar page={page} />
      {children}
    </div>
  );
}
