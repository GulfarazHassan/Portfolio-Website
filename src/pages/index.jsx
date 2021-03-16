import React, { useState } from "react";
import AWS from "../components/aws";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/infoSection/Data";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Sidebar from "../components/sidebar";
import About from "../components/about/index";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <AWS />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}
