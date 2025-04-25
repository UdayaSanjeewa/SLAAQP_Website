import React from "react";
import Icqcc2024BusinessImage from "/public/slaaqpImages/icqcc2024business.jpg";

function IcqccBusinessSection() {
  return (
    <section className="px-6 py-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        ICQCC 2024 – Business Forum
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img src={Icqcc2024BusinessImage.src} alt="icqcc business image" /* width={560} */ className="w-[560px]" />
        </div>

        {/* Right: Text */}
        <div className="text-gray-500 text-lg leading-relaxed space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-500 mb-6">
              Prof Wan Seon Shin
            </h3>
            <p className="mb-6">
              Professor of Systems Management Engineering of Sungkyunkwan
              University, Seoul, Korea. His research and teaching interests
              include quality management, technology leadership, and digital
              transformation.
            </p>
            <p className="mb-6">
              Prof Shin has served as chairman of the Asian Network for Quality
              (ANQ), president of the Korean Society for Quality Management
              (KSQM) and the Korean Society for Public Enterprises, and has been
              an external board member of Samsung Engineering Corporation.
            </p>
            <p className="mb-6">
              His illustrious academic career is strengthened by strong ties
              with the industry. Prof. Shin has provided consultation and
              education programmes on quality innovation and leadership for more
              than 200 organizations. These include SAMSUNG Electronics, SAMSUNG
              Engineering, HYUNDAI, KIA Motors, LG Electronics, LG CHEM, POSCO,
              KT, Korea Electric Power Corporation (KEPCO), HANA Financial
              Group, KOLON Industries, HANWHA Corporation, DAELIM construction,
              YG-1, and numerous companies in the public sector. He also served
              as member of the management advisory boards of Export and Import
              Bank of Korea (EXIM), Korea Land and Housing Corporation (KLHC),
              Korea Cadastral Survey Corporation (KCSC), and STX Heavy Industry
              Corporation.
            </p>
          </div>
        </div>
      </div>
      {/* Below Area */}
      <div className="text-lg text-gray-500">
        <p className="mb-6">
          Moving the Needle Senior Manager Forum is a
          concurrent event of the ICQCC, that will happen on the same day as the
          research conference, on Sunday, 10th November 2024 at the Hilton
          Colombo Residences (Jaic Hilton). This meeting is aimed at Senior
          Management. Prof Shin has very kindly accepted our invitation and
          agreed to share his experience. All Forum participants are invited to
          attend the Research Conference from 1400 to 1700 hrs on the same day.
        </p>

        <p className="text-gray-500 mb-6">
          The Participation Fee per head including Lunch and Refreshments is
          Rs.15,000/-.
        </p>

        <p className="mb-6">
          Let us work together to push Sri Lanka Beyond Boundaries with a Quest
          for Quality Productivity and Innovation. Please communicate
          coordination organisation or SLAAQP.
        </p>

        <p className="text-lg text-gray-500">
          Mobile : +94 71 234 3240 – Dr. Surani / +94 77 322
          8244 – Dr. Nirmali
        </p>
        <div className="flex justify-center items-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScOdpgE9RQ7skAn0-cHmEtno0V0C6B-DUPkYZknc8teJ6uxEQ/viewform?vc=0&c=0&w=1&flr=0">
        <button className="mt-4 bg-[#ffcd57] font-semibold px-10 py-4 rounded-full shadow hover:bg-yellow-500 transition text-xl text-black">
          Register Now !
        </button>          
          </a>
        </div>
      </div>
    </section>
  );
}

export default IcqccBusinessSection;
