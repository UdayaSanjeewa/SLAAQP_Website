import React from "react";
import ImageForm from "../components/organisms/ImageForm";
import formImage from "/public/slaaqpImages/LeanSixSigmaFlyer.png"

function LeanSixSigma() {
  return (
    <div>
      <ImageForm
        image={formImage}
        title="Certificate in Lean Six Sigma Foundation (CLSSF)"
        date="16th March 2025"
        time="09:00 a.m. – 05:30 p.m."
        venue="Postgraduate Institute of Management, 28, Lesley Ranagala Mawatha, Colombo 08"
        courseFee="LKR 16,450 per person"
        link="https://docs.google.com/forms/d/e/1FAIpQLSerd8ZPSQzj4bvA3pAAZQLYWwRk7oDhh_OHzuMf-3UYhPZZDA/viewform"
      />
    </div>
  );
}

export default LeanSixSigma;
