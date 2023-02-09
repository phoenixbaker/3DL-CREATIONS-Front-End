import React, { ReactNode } from "react";
import NavBar from "../NavBar";

interface BackgroundPropsType {
  children?: ReactNode | ReactNode[];
}

export default function index({ children }: BackgroundPropsType) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
