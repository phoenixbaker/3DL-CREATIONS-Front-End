import React, { useState } from "react";

import useLogIn from "../../hooks/useLogIn";

export default function PasswordInput() {
  const { auth, setAuth, error, setError } = useLogIn();
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);

  return (
    <div className="flex flex-col self-center text-start w-4/5 pt-8">
      <label className="text-xl mb-1 mx-1">
        Password{" "}
        {(error.password?.length || error.passwordConfirm?.length) && (
          <span className="text-red-500 text-sm px-4">
            {error.password || error.passwordConfirm}{" "}
          </span>
        )}
      </label>
      <input
        className={`shadow-md rounded-full p-2 px-4 focus:outline focus:border-none focus:outline-secondary-blue $ ${
          error.password
            ? "border border-red-600"
            : border1
            ? "border border-green-400"
            : ""
        }`}
        placeholder="Password"
        onChange={(e) => {
          setBorder1(!!e.target.value.length);
          if (!!auth.passwordConfirm?.length)
            setBorder2(e.target.value === auth.passwordConfirm);
          setAuth((prev) => ({
            ...prev,
            password: e.target.value,
          }));

          setError((prev) => ({
            ...prev,
            password: undefined,
            passwordConfirm: undefined,
          }));
        }}
        type="password"
      />
      <input
        className={`shadow-md rounded-full p-2 px-4 focus:outline focus:border-none focus:outline-secondary-blue mt-6 ${
          error.passwordConfirm
            ? "border border-red-600"
            : border2
            ? "border border-green-400"
            : auth.passwordConfirm?.length
            ? "border border-red-600"
            : ""
        }`}
        placeholder="Confirm Password"
        onChange={(e) => {
          setBorder2(e.target.value === auth.password);
          setError((prev) => ({
            ...prev,
            password: undefined,
            passwordConfirm: undefined,
          }));
          setAuth((prev) => ({
            ...prev,
            passwordConfirm: e.target.value,
          }));
        }}
        type="password"
      />
    </div>
  );
}
