// components/SeminarsSection.tsx
import Image from "next/image";

const seminars = [
  {
    title: "Quality Functional Deployment",
    date: "May 2024",
    venue: "Postgraduate Institute of Management (PIM)",
    image: "/programsImages/seminarImage01.jpg",
    tag: "2024 May",
  },
  {
    title: "Statistical Tools And Their Applications",
    date: "May 2024",
    venue: "Postgraduate Institute of Management (PIM)",
    image: "/programsImages/seminarImage02.jpg",
    tag: "2024 May",
  },
  {
    title: "Lean Six Sigma Practisoneers Program",
    date: "March 2024",
    venue: "Postgraduate Institute of Management (PIM)",
    image: "/programsImages/seminarImage03.jpg",
    tag: "2024 May",
  },
];

const SeminarsSection = () => {
  return (
    <section className="bg-[#f9f7f3] py-8 px-6">
      <div className="container mx-auto lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3a2352] mb-16 text-center lg:text-left">
          SEMINARS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {seminars.map((seminar, index) => (
            <div key={index} className="mb-12 lg:mb-0">
              <div className="relative mb-4">
                <div className="absolute -top-10 left-0 bg-[#f7dc79] text-gray-800 font-bold px-9 py-4 text-xl z-10">
                  {seminar.tag}
                </div>
                <div className="overflow-hidden shadow-md">
                  <Image
                    src={seminar.image}
                    alt={seminar.title}
                    width={400}
                    height={250}
                    className="w-full h-52 object-cover"
                  />
                </div>
              </div>

              <h3 className="text-[23px] font-semibold text-[#3a2352] underline mb-6">
                {seminar.title}
              </h3>

              <div className="h-1 w-16 bg-[#f7dc79] mb-2" />

              <p className="text-lg text-gray-600 mb-10">
                <span>Date :</span> {seminar.date}
              </p>
              <p className="text-lg text-gray-600">
                <span>Venue :</span> {seminar.venue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeminarsSection;
