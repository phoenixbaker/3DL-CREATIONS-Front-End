import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import useLogIn from "../hooks/useLogIn";

type FormInputType = {
  label: string;
  showHeader?: boolean;
  type?: HTMLInputTypeAttribute;
  capitalize?: boolean;
  placeholder?: string;
  val: string;
  warning?: string;
};

export default function FormInput({
  label,
  type,
  placeholder,
  capitalize = false,
  val,
  warning,
  showHeader = true,
}: FormInputType) {
  const { setAuth, setError } = useLogIn();
  const [border, setBorder] = useState<boolean>(false);

  return (
    <div className="flex flex-col self-center text-start w-4/5 pt-8">
      {showHeader && (
        <label className="text-xl mb-1 mx-1">
          {label}
          {warning?.length && (
            <span className="text-red-500 text-sm px-4">{warning} </span>
          )}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder || label}
        className={`shadow-md rounded-full p-2 px-4 focus:outline focus:border-none focus:outline-secondary-blue ${
          capitalize ? "capitalize" : ""
        } ${
          warning
            ? "border border-red-500"
            : border
            ? "border border-green-400"
            : ""
        }`}
        onChange={(e) => {
          setBorder(!!e.target.value.length);
          setError((prev) => ({
            ...prev,
            [val]: undefined,
          }));
          setAuth((prev) => ({
            ...prev,
            [val]: e.target.value,
          }));
        }}
        onBlur={(e) => {
          if (!e.target.value.length || !capitalize) return;
          let string = [...e.target.value.trim()];
          let tempRes = "";

          for (var i = 0; i < string.length; i++) {
            if (i === 0) tempRes = string[i].toUpperCase();
            else if (string[i - 1] === " ")
              tempRes = tempRes + string[i].toUpperCase();
            else tempRes = tempRes + string[i];

            if (i === string.length - 1) {
              return setAuth((prev) => ({
                ...prev,
                [val]: tempRes,
              }));
            }
          }
        }}
      />
    </div>
  );
}
