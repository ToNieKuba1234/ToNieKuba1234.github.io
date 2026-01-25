import React from "react";
import { Star } from "lucide-react";
import Value from "./Value";

export default function About() {
  return (
    <section className="w-full px-6 py-24 flex flex-col items-center text-white bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-4xl text-center mb-24">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full text-base font-semibold bg-yellow-400/20 text-yellow-400 border border-yellow-400/20">
                <Star className="w-4 h-4 text-yellow-400/80" />
                O mnie
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Szlifuję cyfrowe doświadczenia
            </h1>
            <p className="text-slate-400 text-2xl leading-relaxed max-w-7xl mx-auto">
                Wierzę w czysty, czytelny kod oraz rozwiązania, które są łatwe w utrzymaniu i skalowalne w dłuższej perspektywie.
            </p>
        </div>


        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="
                relative rounded-3xl p-10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-[0_0_60px_-15px_rgba(247,181,0,0.35)]">
                <span className="text-yellow-400/70 text-sm font-semibold tracking-widest uppercase">
                    kim jestem?
                </span>

                <h2 className="text-3xl font-semibold mt-3 mb-6">
                    O mnie w skrócie
                </h2>

                <p className="text-slate-400 text-2xl leading-relaxed">
                    Charakteryzuje mnie naturalna ciekawość świata i potrzeba ciągłego odkrywania — od nowych technologii po zupełnie nieoczywiste tematy. Perfekcjonizm i dążenie do samorozwoju motywują mnie do podnoszenia poprzeczki z każdym kolejnym projektem. Poza pracą lubię chodzić na siłownie i grać w piłkę nożną
                </p>
            </div>
            <div className="relative rounded-3xl p-10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-[0_0_60px_-15px_rgba(247,181,0,0.35)]">
                <span className="text-yellow-400/70 text-sm font-semibold tracking-widest uppercase">
                    Edukacja
                </span>
                <h2 className="text-3xl font-semibold mt-3 mb-6">
                    Ścieżka kształcenia
                </h2>
                <p className="text-slate-400 text-2xl leading-relaxed">Z formalności - uczęszczam do 3 klasy technikum programistycznego, na profilu programisty. Ale będąc szczerym, nie jest to jedyny sposób, w który się rozwijam - ciągła praca nad własnymi projektami i nieprzespane noce to własnie to, co kształtuje mnie jako programiste i człowieka.</p>
            </div>
        </div>

        <div className="relative pt-20 pb-10 flex flex-col items-center justify-center text-white overflow-hidden">
            <div className="pointer-events-none absolute inset-0 hidden md:flex items-center justify-center">
                <div className="w-[300px] h-[300px] rounded-full bg-yellow-400/20 blur-[90px]" />
            </div>

            <h2 className="relative z-10 text-3xl md:text-5xl font-semibold mb-24">
                Moje Wartości
            </h2>

            <ul className="relative z-10 flex flex-col gap-6 md:hidden max-w-md text-left">
                <li>
                <h3 className="font-semibold text-lg">Doskonałość</h3>
                <p className="text-sm text-white/80">
                    Zrównoważona architektura, czysty kod i świetne UX to moje mantry.
                </p>
                </li>
                <li>
                <h3 className="font-semibold text-lg">Pasja</h3>
                <p className="text-sm text-white/80">
                    Kocham to, co robię — i na pewno to zauważysz.
                </p>
                </li>
                <li>
                <h3 className="font-semibold text-lg">Życzliwość</h3>
                <p className="text-sm text-white/80">
                    Zawsze gotowy pomóc i zrozumieć drugą stronę.
                </p>
                </li>
                <li>
                <h3 className="font-semibold text-lg">Rzetelność</h3>
                <p className="text-sm text-white/80">
                    Zawsze biorę odpowiedzialność za swoje decyzje, sukcesy i błędy.
                </p>
                </li>
            </ul>

            <div className="relative z-10 hidden md:grid grid-cols-3 grid-rows-3 gap-10 text-center">
                <Value title="Doskonałość" text="Zrównoważona architektura, czysty kod i świetne UX to moje mantry." className="col-start-2 row-start-1" />
                <Value title="Pasja" text="Kocham to, co robię — i na pewno to zauważysz." className="col-start-3 row-start-2" />
                <Value title="Życzliwość" text="Zawsze gotowy pomóc i zrozumieć drugą stronę." className="col-start-2 row-start-3" />
                <Value title="Rzetelność" text="Zawsze biorę odpowiedzialność za swoje decyzje, sukcesy i błędy." className="col-start-1 row-start-2" />
            </div>
        </div>

    </section>
  );
}
