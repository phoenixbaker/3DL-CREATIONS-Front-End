import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React, { ReactNode, useEffect, useState } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";

type NavBarLinkProps = {
  to?: string;
  options?: NavigateOptions;
  children?: ReactNode;
  page: boolean;
  title?: string;
};

export default function NavBarLink({
  to,
  options,
  title,
  page,
  children,
}: NavBarLinkProps) {
  let navigate = useNavigate();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const onScroll = () => setDisplay(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      onMouseLeave={() => setDisplay(false)}
      className="flex flex-col w-full h-full"
    >
      <button
        onMouseEnter={() => setDisplay(true)}
        className={`h-full flex gap-x-1 items-center ${
          page ? "font-bold underline underline-offset-8" : ""
        } `}
        onClick={() => to && navigate(to, options)}
      >
        {title}
        {children && (
          <ArrowDropDown
            className={`translate-y-0.5 ${
              display ? "rotate-180" : "rotate-0"
            } `}
          />
        )}
      </button>
      {children && display && (
        <div
          onMouseEnter={() => display && setDisplay(true)}
          //   Left 0 Width full
          className={`absolute  bg-white text-primary-dark-blue p-4 shadow-md ${
            window.scrollY > 0 ? "mt-[5.5rem]" : "mt-[7.5rem]"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
