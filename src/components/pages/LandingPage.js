import React from "react";
import "../../App.css";
import Cards from "../reference/Cards";
import HeroSection from "../reference/HeroSection";
import Inivitation from "../own/Invitation";
import Footer from "../reference/Footer";
import DateTime from "../own/DateTime";
import Contact from "../own/Contact";
import Location from "../own/Location";
import SendGift from "../own/SendGift";
import GuestBook from "../own/GuestBook";
import Header from "../own/Header";

function LandingPage() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <DateTime />
      <Inivitation />
      <Contact />
      <Cards />
      <Location />
      <SendGift />
      <GuestBook />
      <Footer />
    </>
  );
}

export default LandingPage;
