import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../../../../api/auth";
import useAuth from "../../../../hooks/useAuth";
import useLogIn from "../../hooks/useLogIn";
import FormInput from "../FormInput";

export default function LogInForm() {
  let navigate = useNavigate();
  const { setUser } = useAuth();
  const { auth } = useLogIn();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!auth.email || !auth.password) return;
    let data = await postAuth({ email: auth.email, password: auth.password });

    if (!data) return console.log("No Response from Auth API");
    if (typeof data === "string") return console.warn(data);
    setUser(data);
    return navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <FormInput label="Email" type="email" val="email" />
      <FormInput label="Password" type="password" val="password" />
      <button
        type="submit"
        className="my-10 w-3/5 rounded-full p-4 bg-primary-blue text-white font-bold"
      >
        LOGIN
      </button>
    </form>
  );
}
