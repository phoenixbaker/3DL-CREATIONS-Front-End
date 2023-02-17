import React from "react";
import { Route, Routes } from "react-router-dom";
import useHandleProducts from "./hooks/useHandleProducts";
import useSaveUser from "./hooks/useSaveUser";

import { Background } from "./layout";
import { Account, Auth, Home, Products, SingleProduct } from "./pages";

function App() {
  useHandleProducts();
  useSaveUser();

  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Background>
  );
}

export default App;
