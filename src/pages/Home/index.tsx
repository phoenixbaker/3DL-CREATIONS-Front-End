import React from "react";
import { SearchBar } from "../../layout";
import NavBar from "../../layout/NavBar";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <>
      <SearchBar placeholder="Search a Product..." />
      <ImageSlider />
    </>
  );
}
