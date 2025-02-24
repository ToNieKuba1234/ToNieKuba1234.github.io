import React from "react";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="bg-[#241468] text-white min-h-screen overflow-x-hidden">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
