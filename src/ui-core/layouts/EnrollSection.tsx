// components/EnrollSection.tsx

import { GraduationCap } from "lucide-react";

const EnrollSection = () => {
  return (
    <section className="relative lg:h-[200px] bg-cover bg-center text-[#fceea3] h-auto">
      <div
        className="absolute inset-0 bg-[url('https://slaaqp.org/wp-content/uploads/2024/01/homepage2-hero-2.jpg')] 
        bg-cover bg-center bg-fixed z-0"
      />

      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      <div className="relative z-10 container mx-auto lg:px-20 pt-8 flex gap-4 justify-between items-center flex-col lg:flex-row pb-8 lg:pb-0 px-8">
        <h1 className="text-5xl font-bold leading-tight">
          YOUR FUTURE STARTS <br />
          HERE<span className="text-[#fceea3]">.</span>
        </h1>
        <div>
          <button className="bg-[#fceea3] text-[#3c2f54] font-semibold px-6 py-3 rounded-md flex items-center gap-2 shadow-md hover:bg-[#fef4c0] transition lg:text-2xl">
            <GraduationCap className="w-5 h-5" />
            ENROLL TODAY
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
