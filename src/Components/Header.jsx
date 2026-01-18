import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="w-full border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-5">
        <a href="">
          <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
        </a>

        {!isMobile && (
          <>
            <nav className="flex gap-6 text-lg text-white/70">
              <a className="transition duration-300 hover:text-white hover:scale-105" href="">
                Home
              </a>
              <a className="transition duration-300 hover:text-white hover:scale-105" href="">
                About me
              </a>
              <a className="transition duration-300 hover:text-white hover:scale-105" href="">
                Projects
              </a>
            </nav>

            <button className="px-5 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 transition">
              Get Started
            </button>
          </>
        )}

        {isMobile && (
          <button
            className="z-50 bg-white/10 p-2 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {isMobile && open && (
        <nav className="px-6 pb-5 flex flex-col gap-4">
          <a className="text-lg text-white/80 hover:text-white" href="" onClick={() => setOpen(false)}>
            Home
          </a>
          <a className="text-lg text-white/80 hover:text-white" href="" onClick={() => setOpen(false)}>
            About me
          </a>
          <a className="text-lg text-white/80 hover:text-white" href="" onClick={() => setOpen(false)}>
            Projects
          </a>
        </nav>
      )}
    </header>
  );
}