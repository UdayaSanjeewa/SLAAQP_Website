import React from "react";
import ImageForm from "../components/organisms/ImageForm";
import formImage from "/public/slaaqpImages/Green-Productivity-Training-Batch-02.png"

function GreenProductivity() {
  return (
    <div>
      <ImageForm
        image={formImage}
        title="Green Productivity Training"
        date="15th March 2025"
        time="8:30 a.m. – 4:30 p.m."
        venue="Postgraduate Institute of Management, 28, Lesley Ranagala Mawatha, Colombo 08"
        courseFee="LKR 7,500 per person"
        link="https://docs.google.com/forms/d/e/1FAIpQLSeKSCuAnbomU0t_YxqNc5jwBl6LEWzzxDGVV1tiigR0uM3_lw/viewform"
      />
    </div>
  );
}

export default GreenProductivity;
