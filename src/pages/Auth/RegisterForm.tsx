import React, { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passAuth, setPassAuth] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Set Up Back-end Please");
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <div className="flex flex-col self-center text-start w-4/5 pt-8">
        <label className="text-lg pb-1">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First Name"
          className="shadow-md rounded-full p-2 px-4"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Surname"
          className="shadow-md rounded-full p-2 px-4"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="flex flex-col self-center text-start w-4/5 pt-8">
        <label className="text-lg pb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="shadow-md rounded-full p-2 px-4"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col self-center text-start w-4/5 pt-8">
        <label className="text-lg pb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="shadow-md rounded-full p-2 px-4"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Confirm Password"
          className="shadow-md rounded-full p-2 px-4 mt-4"
          onChange={(e) => setPassAuth(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="my-10 w-3/5 rounded-full p-4 bg-primary-blue text-white font-bold"
      >
        REGISTER
      </button>
    </form>
  );
}
