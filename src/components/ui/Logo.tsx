import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface LogoProps extends HTMLAttributes<HTMLImageElement> {
  white?: boolean;
}

export default function Logo({
  white = false,
  className,
  ...props
}: LogoProps) {
  return (
    <Link to="/" className={`w-fit h-fit`}>
      {white ? (
        <img
          className={`w-28 h-18 ${className}`}
          src="/logo-white.png"
          alt="3DPrints"
          {...props}
        />
      ) : (
        <img
          className={`w-28 h-18 ${className}`}
          src="/logo-black.png"
          alt="3DPrints"
          {...props}
        />
      )}
    </Link>
  );
}
