"use client";
import React from "react";
import CountUp from "react-countup";

function Details() {
  const stats = [
    { number: 500, suffix: "+", label: "Memberships" },
    { number: 8000, suffix: "+", label: "Awards" },
    { number: 100, suffix: "+", label: "Professionals" },
    { number: 28, suffix: "+", label: "Years Excellence" },
  ];

  return (
    <div className="relative w-full lg:h-[260px] text-white h-auto py-10 lg:py-0">
      {/* Background Image with bg-fixed */}
      <div
        className="absolute inset-0 bg-[url('https://slaaqp.org/wp-content/uploads/2024/01/eli-francis-100644-unsplash-1.jpg')] 
        bg-cover bg-center lg:bg-fixed z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Stats Content */}
      <div className="relative z-10 flex justify-around items-center h-full px-6 md:px-20 text-center flex-col lg:flex-row">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="h-[2px] w-7 bg-yellow-400 mx-auto mt-2 rounded-sm mb-6" />
            <div className="text-7xl font-bold text-white relative inline-block">
              <CountUp end={stat.number} duration={2.5} separator="," />
              {stat.suffix}
            </div>
            <div className="text-yellow-300 text-2xl font-semibold mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
