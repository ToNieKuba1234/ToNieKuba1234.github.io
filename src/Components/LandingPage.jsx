import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import rocket from "../assets/hero-rocket.svg";

export default function LandingPage() {
  return (
    <section className="h-[calc(100vh-88px)] px-8 md:px-16 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => {
          const size = Math.random() * 8 + 1;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const opacity = 1;
          const delay = Math.random() * 2;
          const duration = Math.random() * 3 + 2;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
                background: `rgba(255,255,255,${opacity})`,
                mixBlendMode: "screen",
                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 w-full flex items-center justify-between"> 
        <div className="max-w-4xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Cześć, jestem <span className="text-[#F7B500]">Kuba</span>!
          </h1>

          <p className="mt-6 max-w-xl">
            <span className="tracking-widest font-bold md:text-4xl text-3xl text-[#F7B500]">
              <Typewriter
                words={[
                  "Pasja.",
                  "Technologia.",
                  "Rozwiązania.",
                  "Innowacja.",
                  "Kreatywność."
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </span>
          </p>

          <p className="mt-6 text-lg md:text-2xl text-white/70 max-w-xl">
            Tworzę nowoczesne aplikacje webowe i desktopowe, dbając o czysty kod, wydajność i czytelną architekturę.
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center w-1/2 relative">
          <img
            src={rocket}
            alt="Rocket"
            className="w-[72px] animate-rocket rocket-shadow"
          />
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
        }

        @keyframes rocket {
          0% {
            transform: translate(-1px, -4px);
          }
          25% {
            transform: translate(4px, 2px);
          }
          50% {
            transform: translate(-3px, 6px);
          }
          75% {
            transform: translate(3px, -2px);
          }
          100% {
            transform: translate(0px, -4px);
          }
        }

        .animate-rocket {
          animation: rocket 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        .rocket-shadow {
          filter: drop-shadow(0 20px 28px rgba(247,181,0,0.35))
                  drop-shadow(0 30px 40px rgba(255,140,0,0.2));

        }
      `}</style>
    </section>
  );
}