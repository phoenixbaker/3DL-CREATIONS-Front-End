import FacebookLogin from "@greatsumini/react-facebook-login";
import React from "react";

export default function LogInFacebook() {
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID || ""}
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
  );
}
