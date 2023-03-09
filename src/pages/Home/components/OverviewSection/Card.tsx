import React from "react";
import { NavigateOptions, To, useNavigate } from "react-router-dom";

type CardProps = {
  text?: string;
  src?: string;
  className?: string;
  to?: To;
  options?: NavigateOptions;
};

export default function Card({ text, src, className, to, options }: CardProps) {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to || "", options)}
      className={`bg-white hover:scale-105 duration-150 shadow-lg ${className}`}
    >
      <img src={src} className="h-56 px-6 py-3" />
      <div className="bg-primary-dark-blue p-4 text-white rounded-b-md text-center">
        <h1 className="text-2xl font-bold">{text}</h1>
      </div>
    </button>
  );
}
