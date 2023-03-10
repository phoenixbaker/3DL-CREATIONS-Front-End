import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";
import useAuth from "../../hooks/useAuth";
import { NavBar } from "../../layout";
import { Container, LogIn, Register, Switcher } from "./components";
import { AuthContext } from "./context/AuthenticationContext";
import { AuthType, ErrorType } from "./types";

export default function Auth() {
  const { user } = useAuth();
  const [logIn, setLogIn] = useState(true);

  const [auth, setAuth] = useState<AuthType>({} as AuthType);
  const [error, setError] = useState<ErrorType>({} as ErrorType);

  const value = useMemo(
    () => ({ auth, setAuth, error, setError }),
    [auth, error]
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (user.name?.length) navigate("/account");
  }, []);

  return (
    <AuthContext.Provider value={value}>
      <NavBar />
      <section className="flex justify-center items-center">
        <Container>
          <Logo className="my-16 h-40 w-48" />
          <Switcher logIn={logIn} setLogIn={setLogIn} />
          {logIn ? <LogIn /> : <Register />}
        </Container>
      </section>
    </AuthContext.Provider>
  );
}
