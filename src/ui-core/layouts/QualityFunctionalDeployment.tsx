import React from "react";
import ImageForm from "../components/organisms/ImageForm";
import formImage from "/public/slaaqpImages/QFDFlyer1.png"

function QualityFunctionalDeployment() {
  return (
    <div>
      <ImageForm
        image={formImage}
        title="Quality functional deployment"
        date="21st March 2025"
        time="08:30 a.m. – 05:00 p.m."
        venue="Postgraduate Institute of Management, 28, Lesley Ranagala Mawatha, Colombo 08"
        courseFee="LKR 7,500 per person"
        link="https://docs.google.com/forms/d/e/1FAIpQLSdqphWBICe_50TfR5sjcH6a3KhVIeeDAdT7lUWZiEKL9Qlkvg/viewform"
      />
    </div>
  );
}

export default QualityFunctionalDeployment;
