import {
  IParallaxLayer,
  Parallax,
  ParallaxLayer,
} from "@react-spring/parallax";
import React, { useEffect, useRef } from "react";

import HeroSection from "./components/HeroSection";
import { Footer, NavBar, SearchBar } from "../../layout";
import OverviewSection from "./components/OverviewSection";

import CategorySection from "./components/CategorySection";
import LatestSection from "./components/LatestSection";
import PopularSection from "./components/PopularSection";
import InformationSection from "./components/InformationSection";
import ReviewSection from "./components/ReviewSection";
import FAQSection from "./components/FAQSection";
import SectionSlider from "./components/SectionSlider";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null!);
  const contentRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="w-full flex flex-col items-center">
      <NavBar className={`bg-primary-dark-blue`} />
      <HeroSection ref={ref} contentRef={contentRef} />
      <div
        className="bg-white w-full flex flex-col items-center shadow-inner scroll-m-12"
        ref={contentRef}
      >
        <OverviewSection />
        <InformationSection />
        <ReviewSection />
        <FAQSection />
        <PopularSection />
      </div>
      <Footer />
    </div>
  );
}
