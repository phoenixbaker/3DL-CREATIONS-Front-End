import React, { FormEvent, ReactNode, useState } from "react";

import { ErrorType, formSchema } from "../../types";
import useLogIn from "../../hooks/useLogIn";
import { postRegister } from "../../../../api/Register";

type errType = {
  from:
    | "address"
    | "firstName"
    | "lastName"
    | "email"
    | "password"
    | "passwordConfirm"
    | "number";
  message: string;
};

export default function Form({ children }: { children: ReactNode }) {
  const { auth, setError } = useLogIn();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await formSchema
      .validate(auth, { abortEarly: false })
      .catch(({ errors }: { errors: errType[] }) => {
        let res = {} as ErrorType;
        errors.map((err) => {
          res[err.from] = err.message;
        });
        setError(res);
      });

    // @ts-ignore
    postRegister({ ...auth, name: auth.firstName + auth.lastName });
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      {children}
    </form>
  );
}
