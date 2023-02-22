import React from "react";

type SwitcherProps = {
  logIn: boolean;
  setLogIn: (res: boolean) => void;
};

export default function Switcher({ logIn, setLogIn }: SwitcherProps) {
  return (
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
  );
}
