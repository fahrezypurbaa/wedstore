import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Features from "./components/Features";
import DemoPreview from "./components/DemoPreview";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  

  return (
    <div className="App bg-green-950 min-h-screen">
      <Navbar />
      <Hero />
      <Service />
      <Features />
      <DemoPreview />
    </div>
  );
}

export default App;
