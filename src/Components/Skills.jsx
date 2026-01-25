import React from 'react'
import { Star } from 'lucide-react'
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiGithub,
  SiNodedotjs,
  SiGit,
  SiPython,
  SiAxios
} from "react-icons/si";

import Value from './Value';

export default function Skills() {
  const tech = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400"},
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React JS", icon: SiReact, color: "text-cyan-400" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
    { name: "Node JS", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Git", icon: SiGit, color: "text-red-400" },
    { name: "Python", icon: SiPython, color: "text-blue-400" },
    { name: "Axios", icon: SiAxios, color: "text-purple-400" },
  ];

  return (
    <section className="w-full px-6 pt-20 pb-10 flex flex-col items-center text-white bg-gradient-to-b from-black via-slate-950 to-black">

      <span className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full text-base font-semibold bg-yellow-400/20 text-yellow-400 border border-yellow-400/20">
        <Star className="w-4 h-4 text-yellow-400/80" />
        Umiejętności
      </span>

      <h2 className="relative z-10 text-3xl md:text-5xl font-semibold mb-24">
        Technologie
      </h2>

      <div
        className="
          max-w-6xl mx-auto w-full
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-6

          /* TABLET  */
          md:[&>*:nth-last-child(-n+2)]:col-span-2
          md:[&>*:nth-last-child(-n+2)]:justify-self-center

          /* DESKTOP */
          lg:[&>*:nth-last-child(-n+2)]:col-span-1
          lg:[&>*:nth-last-child(-n+2)]:justify-self-stretch
        "
      >
        {tech.map((item) => (
          <div key={item.name} className="group aspect-square w-full max-w-[220px] bg-white/5 rounded-xl shadow-lg shadow-black/40 flex flex-col items-center justify-center gap-6 transition-all hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60">
            <item.icon className={`text-7xl ${item.color} transition-transform group-hover:scale-110`}/>
            <span className="text-lg font-semibold tracking-wide opacity-90 group-hover:opacity-100">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <div className="relative py-20 flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full bg-yellow-400/20 blur-[90px]" />
        </div>

        <h2 className="relative z-10 text-3xl md:text-5xl font-semibold mb-24">
          Umiejętności Emocjonalne
        </h2>

        <ul className="relative z-10 flex flex-col gap-6 md:hidden max-w-md text-left">
          <li>
            <h3 className="font-semibold text-lg">Rozwiązywanie problemów</h3>
            <p className="text-sm text-white/80">
              Szybko analizuję sytuację, znajduję przyczynę i wdrażam skuteczne rozwiązania — nawet w złożonych przypadkach.
            </p>
          </li>

          <li>
            <h3 className="font-semibold text-lg">Komunikacja</h3>
            <p className="text-sm text-white/80">
              Jasno przekazuję myśli, aktywnie słucham i dbam o zrozumienie po obu stronach.
            </p>
          </li>

          <li>
            <h3 className="font-semibold text-lg">Praca zespołowa</h3>
            <p className="text-sm text-white/80">
              Dobrze odnajduję się w pracy zespołowej, wspieram innych i wspólnie dążę do najlepszego efektu.
            </p>
          </li>

          <li>
            <h3 className="font-semibold text-lg">Praca pod presją</h3>
            <p className="text-sm text-white/80">
              Zachowuję spokój i skuteczność nawet przy napiętych terminach i dużej odpowiedzialności.
            </p>
          </li>
        </ul>

        <div className="relative z-10 hidden md:grid grid-cols-3 grid-rows-3 gap-10 text-center">
          <Value
            title="Rozwiązywanie problemów"
            text="Szybko analizuję sytuację, znajduję przyczynę i wdrażam skuteczne rozwiązania — nawet w złożonych przypadkach."
            className="col-start-2 row-start-1"
          />

          <Value
            title="Komunikacja"
            text="Jasno przekazuję myśli, aktywnie słucham i dbam o zrozumienie po obu stronach."
            className="col-start-3 row-start-2"
          />

          <Value
            title="Praca pod presją"
            text="Zachowuję spokój i skuteczność nawet przy napiętych terminach i dużej odpowiedzialności."
            className="col-start-2 row-start-3"
          />

          <Value
            title="Praca zespołowa"
            text="Dobrze odnajduję się w pracy zespołowej, wspieram innych i wspólnie dążę do najlepszego efektu."
            className="col-start-1 row-start-2"
          />
        </div>
      </div>

    </section>
  );
}