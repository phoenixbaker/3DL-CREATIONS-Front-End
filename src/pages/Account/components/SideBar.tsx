import React from "react";
import { Logo } from "../../../components";
import ListButton from "../../../components/ListButton";

export default function SideBar({ className }: { className?: string }) {
  return (
    <div id="SideBar-Container" className={`flex flex-col ${className}`}>
      <ListButton text="MY ACCOUNT" selected />
      <ListButton text="ACCOUNT INFO" />
      <ListButton text="ORDER HISTORY" />
      <ListButton text="PREFERENCES" />
    </div>
  );
}
