import React from "react";
import useLogIn from "../../hooks/useLogIn";
import FormInput from "../FormInput";

export default function NameInput() {
  const { error } = useLogIn();
  return (
    <div className="flex w-4/5 gap-x-10">
      <FormInput
        label="First Name"
        val="firstName"
        warning={error.firstName}
        capitalize
      />
      <FormInput
        label="Last Name"
        val="lastName"
        warning={error.lastName}
        capitalize
      />
    </div>
  );
}
