import React, { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface NavBarLinkProps extends LinkProps {
  text?: string;
}

export default function NavBarLink({
  children,
  className,
  text,
  ...props
}: NavBarLinkProps) {
  return (
    <Link
      className={`text-white text-2xl h-full px-14 rounded-md flex items-center hover:bg-secondary-blue hover:font-bold ${className}`}
      {...props}
    >
      {children || text}
    </Link>
  );
}
