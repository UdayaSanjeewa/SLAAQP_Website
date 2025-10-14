import React from "react";
import ImageForm from "../components/organisms/ImageForm";
import formImage from "/public/slaaqpImages/Img1.jpeg";

function ProductivitySection() {
  return (
    <div className="mt-40 md:mt-0">
      <ImageForm
        image={formImage}
        title="Boost Efficiency Enhance Productivity Improve Quality Standards"
        date="25th October 2025"
        time="8:30 a.m. – 5:00 p.m."
        venue="Postgraduate Institute of Management, 28, Lesley Ranagala Mawatha, Colombo 08"
        courseFee="LKR 16,500 per person"
        link="https://docs.google.com/forms/d/e/1FAIpQLSfnOu32CW_7CDk-6U27yNJ1I8MQFs705wD88EujHQ_l-zFieA/viewform"
      />
    </div>
  );
}

export default ProductivitySection;
