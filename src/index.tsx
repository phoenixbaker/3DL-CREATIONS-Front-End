import React from "react";
import ReactDOM from "react-dom/client";
import "./config/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProductContextProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
    >
      <BrowserRouter>
        <UserContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
