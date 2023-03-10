import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { create } from "apisauce";

import { Google } from "@mui/icons-material";

export default function LogInGoogle() {
  const login = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        let api = create({
          baseURL: "https://www.googleapis.com/oauth2/v3/userinfo",
          headers: {
            Authorization: `Bearer ${res.access_token}`,
          },
        });
        const { data } = await api.get("");
        console.log(data);
      } catch (err) {
        console.warn(err);
      }
    },
  });

  return (
    <button
      className="bg-white w-60 text-center hover:text-white hover:font-bold hover:bg-blue-500 duration-100 border-blue-500 border-2 p-2 px-5 mt-6 rounded-full flex items-center gap-x-3"
      onClick={() => login()}
    >
      <Google />
      <h1>Log In With Google</h1>
    </button>
  );
}
