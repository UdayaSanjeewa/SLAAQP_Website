import Image from "next/image";

const ResearchConferencePartOne = () => {
  return (
    <section className="bg-white py-4 px-6 lg:px-20">
      <div className="container mx-auto lg:px-10">
      <h2 className="lg:text-2xl font-semibold text-gray-900 mb-8 text-xl">
        ICQCC 2024 – Research Conference
      </h2>

      <div className="flex flex-col md:flex-row md:gap-6 lg:gap-0">
        <div className="md:w-[44%]">
          <Image
            src="/slaaqpImages/ResearchConference.jpg" // Ensure this image is placed in the public folder
            alt="ICQCC 2024 Research Conference Poster"
            width={460}
            height={800}
          />
        </div>

        <div className="text-gray-700 text-lg leading-relaxed space-y-4 md:w-[50%] mt-6 lg:mt-0">
          <p>
            It is a usual practice to hold concurrent activities for the ICQCC
            and the SLAAQP organised the research conference, to encourage
            researchers and research students to disseminate their findings and
            to discuss topics of interest at an International Forum. Research Conference will happen on Sunday, 10th November 2024 at the
            Hilton Colombo Residences (Jaic Hilton) from
            1400 to 1700 hours.
          </p>
          <p>
            Case studies and research papers are discussed at this forum. All
            Forum participants are invited to attend the Research Conference
            from 1400 to 1700 hrs on the same day.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ResearchConferencePartOne;
