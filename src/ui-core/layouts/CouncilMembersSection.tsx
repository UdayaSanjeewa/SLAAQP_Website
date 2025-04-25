import { FC } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Image01 from "/public/CouncilMembers/SuraniSharmalee.jpeg";
import Image02 from "/public/CouncilMembers/WipulKularathna.jpg";
import Image03 from "/public/CouncilMembers/AjithWeeratunga.jpg";
import Image04 from "/public/CouncilMembers/Gamalath.jpg";
import Image05 from "/public/CouncilMembers/NamalDharmarathne.jpg";
import Image06 from "/public/CouncilMembers/Medhani.jpg";
import Image07 from "/public/CouncilMembers/MrsSakunthalaGunatilleke.png";
import Image08 from "/public/CouncilMembers/DrNirmali.jpg";
import Image09 from "/public/CouncilMembers/MrPremalalPathirana.jpg";
import Image10 from "/public/CouncilMembers/DrKarthikaKathiresan.jpg";
import Image11 from "/public/CouncilMembers/TMPGTennakoon.png";
import Image12 from "/public/CouncilMembers/MrHemanthaWeerakoon.jpg";
import Image13 from "/public/CouncilMembers/HemanthiRanasinghe.jpg";
import Image14 from "/public/CouncilMembers/RuwaniSenevirathne.jpg";
import Image15 from "/public/CouncilMembers/breather.png";
import Image16 from "/public/CouncilMembers/Uditha.jpg";
import Image17 from "/public/CouncilMembers/Dumindu.jpg";
import Image18 from "/public/CouncilMembers/breather.png";
import Image19 from "/public/CouncilMembers/MrsIfhamaaAzeem.jpeg";
import Image20 from "/public/CouncilMembers/MrTonyUkwattage.jpg";
import Image21 from "/public/CouncilMembers/MrSanjeewaRanasinghe.png";
import Image22 from "/public/CouncilMembers/ProfChandanaPerera.jpg";
import Image23 from "/public/CouncilMembers/breather.png";
import Image24 from "/public/CouncilMembers/breather.png";
import Image25 from "/public/CouncilMembers/KDPPPerera.jpeg";
import Image26 from "/public/CouncilMembers/KLMeedeniya.png";

type Member = {
  name: string;
  title: string;
  imageUrl?: StaticImageData;
};

const members: Member[] = [
  { name: "Dr. Surani Sharmaelee", title: "President", imageUrl: Image01 },
  {
    name: "Mr. Wipul Kularathne",
    title: "Immediate Past President",
    imageUrl: Image02,
  },
  { name: "Mr. Ajith N Weeratunga", title: "Vice Patron", imageUrl: Image03 },
  { name: "Mr. D B Gamalath", title: "Vice Patron", imageUrl: Image04 },
  {
    name: "Mr. Namal Dharmarathne",
    title: "Senior Vice President",
    imageUrl: Image05,
  },
  {
    name: "Mrs. Medhani Somasinghe",
    title: "Vice President",
    imageUrl: Image06,
  },
  {
    name: "Mrs. Sakunthala Goonethelleke",
    title: "Vice President",
    imageUrl: Image07,
  },
  { name: "Dr. Nirmali De Silva", title: "Vice President", imageUrl: Image08 },
  {
    name: "Mr. P.M Premalal Pathirana",
    title: "Vice President",
    imageUrl: Image09,
  },
  { name: "Dr. Karthika Kathiresan", title: "Secretary", imageUrl: Image10 },
  { name: "T.M.P.G Thennakoon", title: "Treasurer", imageUrl: Image11 },
  {
    name: "Dr. Hemantha Weerakoon",
    title: "Asst. Secretary",
    imageUrl: Image12,
  },
  { name: "Prof. Hemanthi Ranasinghe", title: "Editor", imageUrl: Image13 },
  {
    name: "Mrs. Ruwani Dulanjala Senevirathne",
    title: "Asst. Treasurer",
    imageUrl: Image14,
  },
  { name: "Mr. Janka Rathnakumara", title: "Asst. Editor", imageUrl: Image15 },
  { name: "Mr. Uditha Senaratne", title: "Council Member", imageUrl: Image16 },
  { name: "Mr. Dumindu Ranaweera", title: "Council Member", imageUrl: Image17 },
  {
    name: "Mr. Darshana Lalchandra",
    title: "Council Member",
    imageUrl: Image18,
  },
  { name: "Mrs. Ifhamaa Azeem", title: "Council Member", imageUrl: Image19 },
  { name: "Mr. Tony Ukwattage", title: "Council Member", imageUrl: Image20 },
  {
    name: "Mr. Sanjeewa Ranasinghe",
    title: "Council Member",
    imageUrl: Image21,
  },
  { name: "Prof. Chandana Perera", title: "Council Member", imageUrl: Image22 },
  {
    name: "Mr. Channa Gunawardana",
    title: "Council Member",
    imageUrl: Image23,
  },
  {
    name: "T. Nanayakkara Tharanga",
    title: "Council Member",
    imageUrl: Image24,
  },
  { name: "K.D.P.P Perera", title: "Council Member", imageUrl: Image25 },
  { name: "K.L Meedeniya", title: "Council Member", imageUrl: Image26 },
];

const CouncilMembersSection: FC = () => {
  return (
    <section className="px-6 py-10">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Council Members
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-4 space-y-3"
            >
              <div className="relative w-30 h-30 bg-gray-200 overflow-hidden">
                {/* Replace with real image if available */}
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                    Photo
                  </div>
                )}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-5 p-1">
                  <FaFacebookF className="text-red-600 text-3xl bg-white rounded-full p-1" />
                  <FaTwitter className="text-red-600 text-3xl bg-white rounded-full p-1" />
                  <FaLinkedinIn className="text-red-600 text-3xl bg-white rounded-full p-1" />
                </div>
              </div>
              <div className="text-xl font-semibold">{member.name}</div>
              <div className="text-sm text-gray-600">{member.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouncilMembersSection;
