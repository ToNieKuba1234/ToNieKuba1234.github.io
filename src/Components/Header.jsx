import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const [lang, setLang] = useState("PL");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="w-full border-b-2 border-white/10">
      <div className="flex items-center justify-between px-6 py-5">
        <a href="">
          <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
        </a>

        {!isMobile && (
          <>
            <nav className="flex gap-6 text-lg text-white/70">
              <a className="transition duration-300 hover:text-white hover:scale-105" href="/">
                Główna
              </a>
              <a className="transition duration-300 hover:text-white hover:scale-105" href="/">
                O mnie
              </a>
              <a className="transition duration-300 hover:text-white hover:scale-105" href="/">
                Edukacja
              </a>
              <a className="transition duration-300 hover:text-white hover:scale-105" href="/">
                Projekty
              </a>
            </nav>

            <button
              className="px-3 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-slate-50 flex items-center gap-3 min-w-[45px]"
              onClick={() => setLang(lang === "PL" ? "EN" : "PL")}
            >
              <span className="text-sm font-semibold">{lang}</span>
            </button>

          </>
        )}

        {isMobile && (
          <div className="flex items-center gap-3">
            <button
              className="px-3 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-slate-50 flex items-center justify-center min-w-[45px]"
              onClick={() => setOpen(!open)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <button
              className="px-3 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-slate-50 flex items-center gap-3 min-w-[45px]"
              onClick={() => setLang(lang === "PL" ? "EN" : "PL")}
            >
              <span className="text-sm font-semibold">{lang}</span>
            </button>
          </div>
        )}

      </div>

      {isMobile && open && (
        <nav className="flex flex-col w-full border-b-[1px]">
          <a className="text-lg w-full text-center border-t-[1px] p-4 text-white/80 hover:bg-slate-50" href="/" onClick={() => setOpen(false)}>
            Główna
          </a>
          <a className="text-lg w-full text-center border-t-[1px] p-4 text-white/80 hover:bg-slate-50" href="/" onClick={() => setOpen(false)}>
            O mnie
          </a>
          <a className="text-lg w-full text-center border-t-[1px] p-4 text-white/80 hover:bg-slate-50" href="/" onClick={() => setOpen(false)}>
            Edukacja
          </a>
          <a className="text-lg w-full text-center border-t-[1px] p-4 text-white/80 hover:bg-slate-50" href="/" onClick={() => setOpen(false)}>
            Projekty
          </a>
        </nav>
      )}
    </header>
  );
}
