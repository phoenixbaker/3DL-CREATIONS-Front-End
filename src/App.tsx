import React from "react";
import { Route, Routes } from "react-router-dom";
import useHandleProducts from "./hooks/useHandleProducts";
import useSaveUser from "./hooks/useSaveUser";

import {
  Account,
  Auth,
  Home,
  Products,
  SingleProduct,
  Create,
  Business,
} from "./pages";

function App() {
  useSaveUser();
  useHandleProducts();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/create" element={<Create />} />
      <Route path="/business" element={<Business />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/account" element={<Account />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default App;
