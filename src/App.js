import React from "react";

import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";

export default function App() {
  return (
    <div className="text-white min-h-screen overflow-x-hidden font-inter">
      <Header />
      <LandingPage />
    </div>
  );
}
