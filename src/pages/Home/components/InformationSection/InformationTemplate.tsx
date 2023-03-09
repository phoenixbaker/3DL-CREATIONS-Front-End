import React, { ReactNode } from "react";
import {
  NavigateFunction,
  NavigateOptions,
  To,
  useNavigate,
} from "react-router-dom";

type InformationTemplateProps = {
  header?: string;
  src?: string;
  children?: ReactNode;
  flip?: boolean;

  to?: To;
  options?: NavigateOptions;
};

export default function InformationTemplate({
  header,
  src,
  children,
  flip,
  to,
  options,
}: InformationTemplateProps) {
  let navigate = useNavigate();

  return (
    <div
      className={`flex justify-between w-3/4 ${flip ? "flex-row-reverse" : ""}`}
    >
      <div className="px-28">
        <button
          className="font-bold text-3xl text-primary-blue underline underline-offset-8"
          onClick={() => navigate(to || "", options)}
        >
          {header}
        </button>
        <div className="pl-4 pt-2 list-inside">{children}</div>
      </div>
      <div className="p-4 border-primary-dark-blue border-4 rounded-sm shadow-2xl">
        <img src={src} className="w-80" />
      </div>
    </div>
  );
}
