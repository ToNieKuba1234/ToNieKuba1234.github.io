import React from "react";
import HeroIcon from "../assets/hero-icon.png";

export default function Hero() {

  return (
    <section className="h-screen flex flex-col lg:flex-row justify-around items-center text-center p-10 ">
      <div className="flex flex-col justify-center items-center w-full h-full gap-y-5">
        <h1 className="text-5xl font-bold mb-4 motion-translate-y-in-[-150%]">Cześć, jestem Kuba!</h1>
        <p className="text-xl text-center w-3/4 motion-opacity-in-[0%] motion-duration-[3.00s]/opacity">Z pasją tworzę interesujące i interaktywne strony internetowe. Moje podejście łączy nowoczesny design z funkcjonalnością, co pozwala mi dostarczać unikalne projekty dostosowane do potrzeb klientów. Jak mogę Ci pomóc?</p>
      </div>
      <div className="w-full h-ful flex justify-center items-center">
        <img src={HeroIcon} alt="hero-icon" className="w-[31rem] motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-duration-[1.00s]/opacity" />
      </div>
    </section>
  );
}
