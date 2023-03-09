import React from "react";
import { Logo } from "../components";

export default function Footer() {
  return (
    <div className="bg-primary-dark-blue w-full flex items-center flex-col p-8 text-white">
      <div className="grid-cols-3 grid justify-items-center w-3/4">
        <div className="flex flex-col gap-y-4">
          <Logo white />
          <h1 className="font-bold">3DL Creations</h1>
        </div>
        <div>
          <h1 className="font-bold">Browse</h1>
          <li>All Pages</li>
          <li>All Pages</li>
          <li>All Pages</li>
          <li>All Pages</li>
          <li>All Pages</li>
        </div>
        <div>
          <h1 className="font-bold">Contact</h1>
          <text>Details (Email & Number)</text>
        </div>
      </div>
    </div>
  );
}
