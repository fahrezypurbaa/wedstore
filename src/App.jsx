import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
    </div>
  );
}

export default App;
