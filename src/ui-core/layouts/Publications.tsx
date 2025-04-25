// components/Publications.tsx
import React from "react";
import QualityControlCircleGuide from "/public/slaaqpImages/QualityControlCircleWorkbook.jpg";
import BookImage01 from "/public/slaaqpImages/QCCBookpage1.jpg";
import BookImage02 from "/public/slaaqpImages/QCCBookpage2.jpg";

const Publications = () => {
  return (
    <section className="px-6 py-6 bg-white text-gray-800">
      <div className="containter mx-auto lg:px-14">
      <div className="grid md:grid-cols-2 lg:gap-2 items-start gap-6">
        {/* Book Cover */}
        <div className="flex justify-center">
          <img
            src={QualityControlCircleGuide.src} // Make sure this file is in your public folder or update path accordingly
            alt="Quality Control Circle Guide"
            // width={540}
            className="rounded shadow-md w-[540px]"
          />
        </div>

        {/* Book Info & Content */}
        <div className="text-sm leading-6 space-y-3">
          <h3 className="lg:text-lg font-semibold text-gray-500 text-[16px]">
            Quality Control Circle Guide For Productivity Improvement
          </h3>
          <p className="text-lg text-gray-500 font-semibold pt-6">Discount Price – Rs. 1650</p>
          <img src={BookImage01.src} alt="book 01 image" /* width={600} */ className="w-[600px]" />
          <img src={BookImage02.src} alt="book 02 image" /* width={600} */ className="w-[600px]" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Publications;
