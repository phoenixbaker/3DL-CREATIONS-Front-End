import React from "react";
import { Logo } from "../../components";
import { NavBar } from "../../layout";
import { AccountInfo, SideBar } from "./components";

export default function account() {
  return (
    <>
      <NavBar />
      <section
        id="Account Section"
        className="flex flex-col items-center w-full"
      >
        <Logo className="mt-10 mb-4 w-52 h-40" />
        <div className="grid grid-cols-12 p-12">
          <div />
          <SideBar className="col-span-2" />
          <div />
          <AccountInfo className="col-span-6 " />
        </div>
      </section>
    </>
  );
}
