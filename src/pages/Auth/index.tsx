import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";
import useAuth from "../../hooks/useAuth";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

export default function Auth() {
  let navigate = useNavigate();
  const { user } = useAuth();
  const [logIn, setLogIn] = useState(true);

  useEffect(() => {
    if (user.name?.length) navigate("/account");
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center w-2/5 rounded-xl bg-gray-100 mt-16">
        <Logo className="my-16 h-40 w-48" />
        <div className="flex justify-center gap-x-20">
          <button
            onClick={() => setLogIn(true)}
            className="text-2xl"
            style={{
              color: logIn ? "#9DD1F1" : "black",
              fontWeight: logIn ? "bold" : "normal",
            }}
          >
            Login
          </button>
          <button
            onClick={() => setLogIn(false)}
            className="text-2xl"
            style={{
              color: !logIn ? "#9DD1F1" : "black",
              fontWeight: !logIn ? "bold" : "normal",
            }}
          >
            Register
          </button>
        </div>
        {logIn ? <LogInForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
