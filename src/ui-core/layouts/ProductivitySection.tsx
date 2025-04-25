import React from "react";
import ImageForm from "../components/organisms/ImageForm";
import formImage from "/public/slaaqpImages/QCCWorkshopFlyer.png";

function ProductivitySection() {
  return (
    <div className="mt-40 md:mt-0">
      <ImageForm
        image={formImage}
        title="Enhance Quality, Maximize Productivity"
        date="8th and 9th March 2025"
        time="8:30 a.m. – 4:30 p.m."
        venue="Postgraduate Institute of Management, 28, Lesley Ranagala Mawatha, Colombo 08"
        courseFee="LKR 16,500 per person"
        link="https://docs.google.com/forms/d/e/1FAIpQLSfnOu32CW_7CDk-6U27yNJ1I8MQFs705wD88EujHQ_l-zFieA/viewform"
      />
    </div>
  );
}

export default ProductivitySection;
