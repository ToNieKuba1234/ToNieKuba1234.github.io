import React from "react";

import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";

export default function App() {
  return (
    <div className="text-white min-h-screen overflow-x-hidden font-inter">
      <Header />
      <LandingPage />
      <About />
    </div>
  );
}
