import React from "react";

export default function ProjectCard({ name, desc, url }) {
    const handleClick = () => {
        window.open(url, "_blank")
    };
    
    return (
    <div className="min-h-[175px] bg-gray-900 p-6 rounded-xl shadow-lg text-white hover:cursor-pointer hover:bg-gray-800 active:bg-gray-700" onClick={handleClick}>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
    </div>
  );
}
