const ResearchConferencePartTwo = () => {
  return (
    <section className="bg-white py-10 px-6 lg:px-20 text-gray-500">
      <div className="container mx-auto lg:px-6">
        <h3 className="text-xl font-semibold mb-6">Programme</h3>

        <div className="space-y-8 text-sm md:text-base">
          {[
            ["13:30", "Registration"],
            [
              "14:00",
              <>
                Welcome address by Dr Surani Dias, Chairperson ICQCC, President
                SLAAQP <br />
                <span className="block mt-8">
                  Quality Productivity & Innovation
                </span>
              </>,
            ],
            [
              "14:10",
              <>
                Guest Speaker Prof Ajith de Alwis, Chief Innovation Officer NIA{" "}
                <br />
                <span className="block mt-8">Innovation Bandwagon</span>
              </>,
            ],
            [
              "14:25",
              <>
                Chief Guest Dr Asanga Ranasinghe <br />
                <span className="block mt-8">
                  Director, Postgraduate Institute of Management
                </span>{" "}
                <br />
                <span className="block">
                  Sustaining Management for an Innovative Culture
                </span>
              </>,
            ],
            ["14:35", "Citation for Prof Wan Seon Shin"],
            ["14:40", "Opening Remarks by Prof Wan Seon Shin"],
            ["14:45", "Research paper presentations"],
            ["16:45", "Closing Remarks"],
            ["16:50", "Refreshments"],
          ].map(([time, description], idx) => (
            <div key={idx} className="flex gap-4">
              <span className="font-semibold w-20">{time}</span>
              <div>{description}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-lg space-y-6">
          <p>
            <strong>
              The Participation Fee per head including Refreshments is
              Rs.10,000/-
            </strong>
          </p>
          <p>
            Let us work together to push Sri Lanka beyond boundaries with a
            Quest for Quality Productivity and Innovation. Please communicate
            coordination organisation or SLAAQP.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:research.icqcc2024@gmail.com"
              className="text-blue-600 underline"
            >
              research.icqcc2024@gmail.com
            </a>
          </p>
          <p className="font-bold text-lg">
            <strong>Mobile:</strong> +94 71 234 3240 – Dr. Surani / +94 77 358
            6703 – Mr. Karu
          </p>
        </div>

        <div className="lg:mt-24 flex justify-center items-center mt-6">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScOdpgE9RQ7skAn0-cHmEtno0V0C6B-DUPkYZknc8teJ6uxEQ/viewform?vc=0&c=0&w=1&flr=0">
            <button className="bg-[#ffcd57] hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300 text-xl">
              Register Now !
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchConferencePartTwo;
