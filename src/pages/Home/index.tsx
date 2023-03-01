import React from "react";
import useProducts from "../../hooks/useProducts";
import { SearchBar } from "../../layout";
import CategorySection from "./components/CategorySection";
import Header from "./components/Header";
import LatestSection from "./components/LatestSection";
import PopularSection from "./components/PopularSection";
import SectionSlider from "./components/SectionSlider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SearchBar placeholder="Search a Product..." />
      {/* <Header /> */}
      <PopularSection />
      <CategorySection />
      <LatestSection />
    </div>
  );
}
