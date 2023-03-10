import FacebookLogin from "@greatsumini/react-facebook-login";
import React from "react";
import { Facebook } from "@mui/icons-material";

export default function LogInFacebook() {
  return (
    <div className="bg-white w-60 text-center hover:text-white hover:font-bold hover:bg-blue-500 duration-100 border-blue-500 border-2 p-2 px-5 mt-6 rounded-full flex items-center gap-x-3">
      <Facebook />
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID || ""}
        fields="name,email,picture"
        onSuccess={(res) => {
          console.log(res);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success!", response);
        }}
      />
    </div>
  );
}
