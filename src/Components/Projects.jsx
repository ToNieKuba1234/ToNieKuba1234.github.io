import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(Array(3).fill(false)); // Zakładamy, że mamy 3 projekty
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleProjects((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
          observer.unobserve(entry.target);
        }
      });
    });

    projectRefs.current.forEach((project) => {
      if (project) {
        observer.observe(project);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="p-10 text-center bg-white rounded-3xl text-black flex flex-col gap-y-16">
      <h2 className="text-3xl font-bold mb-6">Moje Projekty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          ['Strona Kancelarii', 'Stworzenie profesjonalnej i nowoczesnej strony internetowej dla kancelarii prawnej, która ma na celu prezentację usług prawnych, budowanie zaufania oraz ułatwienie kontaktu z klientami.', 'https://toniekuba1234.github.io/RPMK/'],
          ['Strona Ag. Nieruchomości', 'Stworzenie nowoczesnej i funkcjonalnej strony internetowej, która ma na celu zwiększenie widoczności agencji w internecie oraz poprawę jakości obsługi klienta.', 'https://toniekuba1234.github.io/AgencjaNieruchomo-ci/'],
          ['Projekty Szkolne', 'Uczę się programowania również w szkole, dlatego tutaj będą dostępne wszystkie moje szkolne projekty ']
        ].map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`${visibleProjects[index] ? 'motion-preset-fade-lg' : ''}`}
          >
            <ProjectCard name={project[0]} desc={project[1]} url={project[2]} />
          </div>
        ))}
      </div>
    </section>
  );
}
