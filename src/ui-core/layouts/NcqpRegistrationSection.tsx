import { FC } from "react";
import Image from "next/image";
import NcqpPoster from "/public/slaaqpImages/AdvancementofQualityProductivity.png"; // Use the appropriate image name or update if different
import Link from "next/link";

const NcqpRegistrationSection: FC = () => {
  return (
    <section className="px-6 py-12 bg-white text-gray-800">
      <div className="container mx-auto lg:px-16">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-[60%] min-w-[200px]">
            <h2 className="text-4xl font-bold mb-6 text-black">Registrations</h2>
            <p className="text-red-600 font-semibold text-xl">
              The deadline for Registrations is 10th March, 2025.
            </p>
            <p className="mb-8 text-xl font-semibold text-black">
              The initial step for participation in our event is to register
              your company in our web portal. Please ensure that your company
              registration is completed before proceeding to the next step.
            </p>
            <div className="flex justify-center items-center">
              <a href="https://ncqp2025.slaaqp.org/auth/sign-in">
            <button className="bg-[#ffcd57] hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-4 rounded-full text-xl">
              Company Registration
            </button>              
              </a>
            </div>

            <p className="mb-2 text-xl font-semibold text-black">
              Please follow Web Portal Guidelines to Register!
            </p>

            <div className="flex flex-col">
              <a href="https://slaaqp.org/wp-content/uploads/2025/03/NCQP-2025-Final-Guidelines.pdf">
              <button className="bg-[#dc45fe] hover:bg-purple-600 text-gray-800 font-semibold px-8 py-4 rounded-full text-lg w-[300px]">
                NCQP 2025 Guidelines
              </button>              
              </a>
              <a href="https://slaaqp.org/wp-content/uploads/2025/03/ICQCC2024-Registration-and-Document-Submission-Guidlines.pdf">
              <button className="bg-[#17c2f3] hover:bg-green-500 text-gray-800 font-semibold px-8 py-4 rounded-full text-lg w-[380px]">
                Download Web Portal Guidelines
              </button>              
              </a>
            </div>

            <h3 className="font-semibold mb-2 text-xl text-black">
              NCQP 2025 Evaluation Guidelines
            </h3>
            <div className="flex flex-col mb-6">
              <a href="https://slaaqp.org/wp-content/uploads/2025/03/NCQP-2025-Evaluation-sheet-LSS-21.10-Copy.pdf">
              <button className="bg-[#ea0096] hover:bg-pink-500 text-gray-800 font-semibold px-8 py-4 rounded-full lg:text-lg md:w-[470px]">
                Download Lean Six Sigma Evaluation Sheet
              </button>              
              </a>
              <a href="https://slaaqp.org/wp-content/uploads/2025/03/NCQP-2025-Evaluation-sheet-QCC-CFT-QIP-Inno-for-presentation-14.10.2024-Copy.pdf">
              <button className="bg-[#63ff45] hover:bg-green-500 text-gray-800 font-semibold px-8 py-4 rounded-full lg:text-lg md:w-[455px]">
                Download QCC/CFT/QIP Evaluation Sheet
              </button>              
              </a>
            </div>

            <h3 className="text-3xl font-bold mb-8 underline text-black">
              Kaizen Competition Registration
            </h3>
            <p className="mb-8 font-semibold text-xl text-black">
              Download Kaizen Application Form and fill one form for each
              Kaizen. Then go to ➝ Kaizen Submission and upload
              it.
            </p>
            <ul className="list-disc ml-5 mb-4 text-xl font-semibold text-black">
              <li>Submission Deadline – 25th April 2025</li>
            </ul>
            <div className="flex justify-center items-center mb-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmEBEQ0lsHwsN5PymGRUt0JSMPdQDL-FEs2flI9NldQ9UPAA/viewform?usp=send_form">
            <button className="bg-yellow-400 hover:bg-yellow-500  text-gray-800 font-semibold px-8 py-4 rounded-full text-xl">
              Kaizen Submission
            </button>              
              </a>
            </div>

            <ul className="list-disc ml-5 mb-4 text-xl font-semibold text-black">
              <li>Kaizen Application Form</li>
              <li>Kaizen Evaluation Sheet</li>
            </ul>

            <div className="flex flex-col mb-8">
              <a href="https://docs.google.com/document/d/1d_vHAWDapmpRGdxll4x9YcINnEStmfY1/edit?tab=t.0">
              <button className="bg-[#53e881] hover:bg-green-500 text-gray-800 font-semibold px-8 py-4 rounded-full lg:text-xl md:w-[480px]">
                Download Kaizen Application Form
              </button>              
              </a>
              <a href="https://docs.google.com/spreadsheets/d/1UMnSM6zjQ3xHh-FjqlNS8i7Z1lqW6zX6/edit?gid=873543590#gid=873543590">
              <button className="bg-[#5d49e3] hover:bg-purple-600 text-gray-800 font-semibold px-8 py-4 rounded-full lg:text-xl md:w-[480px]">
                Download Kaizen Evaluation Sheet
              </button>              
              </a>
            </div>

            <h3 className="text-4xl font-bold mb-4">Registrations Fee</h3>
            <table className="w-full border border-black lg:text-xl text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left border-black">
                    Competition Streams
                  </th>
                  <th className="border px-4 py-2 text-left border-black">
                    Registration Fee (LKR)
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm lg:text-xl">
                <tr>
                  <td className="border px-4 py-2 border-black">Quality Control Circles</td>
                  <td className="border px-4 py-2 border-black">16,500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-black">Cross-Functional Teams</td>
                  <td className="border px-4 py-2 border-black">16,500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-black">Lean Six Sigma</td>
                  <td className="border px-4 py-2 border-black">16,500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-black">
                    Quality Improvement Projects
                  </td>
                  <td className="border px-4 py-2 border-black">16,500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-black">Kaizen Suggestions</td>
                  <td className="border px-4 py-2 border-black">3,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-black">Participant Fee</td>
                  <td className="border px-4 py-2 border-black">7,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-black">Observer Fee</td>
                  <td className="border px-4 py-2 border-black">7,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Side - Poster Image */}
          <div className="lg:w-[50%] mt-8 lg:mt-0">
            <h1 className="text-5xl font-bold mb-4 text-center lg:text-left">NCQP 2025</h1>
            <Image
              src={NcqpPoster}
              alt="NCQP 2025 Poster"
              width={760}
              height={600}
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NcqpRegistrationSection;
