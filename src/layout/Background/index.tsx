import React, { ReactNode } from "react";
import NavBar from "../NavBar";

interface BackgroundPropsType {
  children?: ReactNode | ReactNode[];
}

export default function index({ children }: BackgroundPropsType) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavBar />
      <div className="w-full min-h-screen-nav">{children}</div>
    </div>
  );
}
