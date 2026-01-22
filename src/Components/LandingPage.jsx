import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function LandingPage() {
  return (
    <section className="h-[calc(100vh-88px)] flex items-center justify-start px-8 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => {
            const size = Math.random() * 8 + 1;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const opacity = Math.random() * 0.6 + 0.2;
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
      </div>

      <div className="w-full max-w-4xl text-left">
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
              typeSpeed={30}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </span>
        </p>


        <p className="mt-6 text-lg md:text-2xl text-white/70 max-w-xl">
          Tworzę nowoczesne aplikacje webowe i desktopowe, dbając o czysty kod, wydajność i czytelną architekturę.
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
        }
      `}</style>
    </section>
  );
}
