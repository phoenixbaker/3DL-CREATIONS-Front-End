import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({
  className,
  src,
  text,
  href,
  state,
}: {
  state: string;
  href: string;
  text: string;
  className?: string;
  src: string;
}) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate(href, {
          state: {
            redirect: state,
          },
        })
      }
      className={`w-80 shadow-2xl rounded-3xl ${className}`}
    >
      <div className="rounded-t-3xl">
        <img className="h-48 rounded-t-3xl" src={src} />
      </div>
      <div className="p-6 transition-none bg-primary-blue text-white text-2xl rounded-b-3xl flex flex-col text-center justify-center font-extrabold ">
        {text}
      </div>
    </button>
  );
}
