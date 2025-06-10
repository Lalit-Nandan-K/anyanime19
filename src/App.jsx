import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Series from "./components/Series/Series";
import Movies from "./components/Movies/Movies";
import Website from "./components/Website/Website";
import Hero from "./components/Hero/Hero";
import Villen from "./components/Villen/Villen";
import SideCharacter from "./components/SideCharacter/SideCharacter";
import Owner from "./components/Owner/Owner";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar onSearch={setSearchTerm} />
      <HeroSection />
      <Series searchTerm={searchTerm} />
      <Movies searchTerm={searchTerm} />
      <Website />
      <Hero />
      <Villen />
      <SideCharacter />
      <Owner />
    </div>
  );
};

export default App;