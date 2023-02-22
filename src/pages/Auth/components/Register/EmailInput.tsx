import React from "react";
import useLogIn from "../../hooks/useLogIn";
import FormInput from "../FormInput";

export default function EmailInput() {
  const { error } = useLogIn();
  return (
    <FormInput
      label="Email"
      placeholder="Example@email.com"
      val="email"
      warning={error.email}
      type="email"
    />
  );
}
