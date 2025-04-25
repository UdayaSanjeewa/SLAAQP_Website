// components/ReportWritingWorkshopSection.tsx
import Image from "next/image";
import { Button } from "../components/atoms/Button";
import {Menu} from "lucide-react";

const ReportWritingWorkshopSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="items-start container mx-auto lg:px-20 flex gap-10 flex-col md:flex-row">
        {/* Poster Image with Date Tag */}
        <div className="relative lg:w-[40%] md:w-[60%]">
          <div className="absolute -top-12 left-0 bg-[#f7dc79] text-black font-bold px-9 py-4 text-lg z-10">
            10 April
          </div>
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/programsImages/ReportWrittingWorkshop.png"
              alt="Report Writing Workshop Poster"
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-[60%] md:w-[40%]">
          <h2 className="text-xl lg:text-4xl font-bold text-[#3a2352] mb-4 text-center md:text-left">
            REPORT WRITING WORKSHOP
          </h2>
          <div className="flex justify-center items-center md:justify-start md:items-start mt-6 lg:mt-0">
          <div className="w-14 h-1 bg-yellow-400 mb-6" />            
          </div>

          <p className="lg:text-2xl font-semibold mb-2 text-lg text-center md:text-left">
            Date : <span>April 10</span>
          </p>
          <p className="lg:text-2xl font-semibold mb-6 text-lg text-center md:text-left">
            Venue : <span>Postgraduate Institute of Management (PIM)</span>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Join us for an exclusive Report Writing Workshop in conjunction with the prestigious
            ICQCC 2024 International Event and NCQP 2024 Local Event! This workshop is designed to
            equip you with the essential skills and techniques needed to excel in report writing,
            ensuring your work stands out in both international and local contexts. Don’t miss this
            opportunity to enhance your professional development and make a lasting impact with
            your reports!
          </p>

          <div className="flex justify-center items-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 text-sm flex gap-4 justify-center items-center">
            REGISTER NOW
            <Menu size={14} />
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportWritingWorkshopSection;
