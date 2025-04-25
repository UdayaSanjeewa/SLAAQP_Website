// components/MembershipFeeDetails.tsx
import React from "react";

const MembershipFeeDetails = () => {
  const data = [
    {
      category: "Individual Members",
      employees: "-",
      subscription: "2000",
      representatives: "-",
    },
    {
      category: "Individual Members - Life Membership",
      employees: "-",
      subscription: "10000",
      representatives: "-",
    },
    {
      category: "Institutional Member",
      employees: "-",
      subscription: "7000",
      representatives: "3",
    },
    {
      category: "Small Company",
      employees: "Less than 50",
      subscription: "5000",
      representatives: "1",
    },
    {
      category: "Medium Company",
      employees: "50 to 500",
      subscription: "7500",
      representatives: "2",
    },
    {
      category: "Large Company",
      employees: "More than 500",
      subscription: "10000",
      representatives: "3",
    },
    {
      category: "Group of Company",
      employees: "-",
      subscription: "25000",
      representatives: "5",
    },
  ];

  return (
    <section className="px-6 py-10 bg-white text-gray-800">
      <div className="container mx-auto lg:px-16">
        <h2 className="lg:text-xl font-bold text-purple-900 mb-4 text-2xl text-center lg:text-left">
          APPLICATION FOR MEMBERSHIP
        </h2>
        <div className="border-t-2 border-yellow-400 w-12 mb-6"></div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Benefits Section */}
          <div className="space-y-4 leading-8 w-[640px] lg:w-[640px] md:w-[400px]">
            <p className="max-w-[400px] md:max-w-full">
              As we embark on a new year filled with opportunities, we would
              like to take this moment to remind you of the valuable benefits
              and opportunities that come with your association membership:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="max-w-[400px] md:max-w-full">
                Recognition of Professional Competencies and Networking
                Opportunities – By becoming a member of SLAAQP you will be able
                to deepen existing business and professional relationships and
                make new contacts by participating on regular activities
                conducted by SLAAQP.
              </li>
              <li className="max-w-[400px] md:max-w-full">
                Also, you will be able to take part in activities conducted by
                committees of the SLAAQP or take a prominent leadership role and
                further broaden your contact to a long-lasting tie between
                common interest groups of professionals.
              </li>
              <li className="max-w-[400px] md:max-w-full">
                SLAAQP will provide exclusive on notification of upcoming events
                in the field of quality and productivity etc. organized by the
                SLAAQP.
              </li>
              <li className="max-w-[400px] md:max-w-full">
                Continuing Professional Development (CPD) – Members will be able
                to upgrade their knowledge and acquire new job skills through
                participating on seminars, workshops and break-out sessions and
                conferences.
              </li>
              <li className="max-w-[400px] md:max-w-full">
                Discount Offers at training programs and NCQP.
              </li>
              <li className="max-w-[400px] md:max-w-full">
                Members will be entitled to 10% discount at our training
                programs and 5% at NCQP and ICQCC respectively.
              </li>
              <li className="max-w-[400px] md:max-w-full">
                Involvement in the Development of the Profession- Members of the
                SLAAQP will be able to take an active role in forums,
                discussions and hence to contribute in the development of the
                profession. Our landmark event of the year NCQP and ICQCC will
                be conducted in June 2024 and Nov 2024 respectively.
              </li>
            </ul>
          </div>

          {/* Fee Table - Desktoop */}
          <div className="overflow-x-auto pl-16 hidden lg:block">
            <table className="min-w-full border border-gray-300 font-bold">
              <thead className="bg-[#f7dc79] text-left">
                <tr className="text-sm">
                  <th className="px-3 py-2 border">Category</th>
                  <th className="px-3 py-2 border">No of Employees</th>
                  <th className="px-3 py-2 border">
                    Annual Subscription (LKR)
                  </th>
                  <th className="px-3 py-2 border">No of Representatives</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="px-3 py-2 border bg-[#f7e6b4] text-sm">
                    Individual Members
                  </td>
                  <td className="px-3 py-2 border">-</td>
                  <td className="px-3 py-2 border">2000</td>
                  <td className="px-3 py-2 border">-</td>
                </tr>
                <tr className="border bg-gray-100">
                  <td className="px-3 py-2 border bg-[#f7e6b4] text-sm">
                    Individual Members - Life Membership
                  </td>
                  <td className="px-3 py-2 border">-</td>
                  <td className="px-3 py-2 border">10000</td>
                  <td className="px-3 py-2 border">-</td>
                </tr>
                <tr className="border">
                  <td className="px-3 py-2 border bg-[#f7e6b4] text-sm">
                    Institutional Member
                  </td>
                  <td className="px-3 py-2 border">-</td>
                  <td className="px-3 py-2 border">7000</td>
                  <td className="px-3 py-2 border">3</td>
                </tr>

                <tr className="font-bold">
                  <td className="px-3 py-2 border text-sm" colSpan={4}>
                    Organizational Members
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-3 py-2 border bg-[#f7e6b4] text-sm">
                    i. Small Company
                  </td>
                  <td className="px-3 py-2 border">Less than 50</td>
                  <td className="px-3 py-2 border">5000</td>
                  <td className="px-3 py-2 border">1</td>
                </tr>
                <tr className="border">
                  <td className="px-3 py-2 border bg-[#f7e6b4] text-sm">
                    ii. Medium Company
                  </td>
                  <td className="px-3 py-2 border">50 to 500</td>
                  <td className="px-3 py-2 border">7500</td>
                  <td className="px-3 py-2 border">2</td>
                </tr>
                <tr className="border">
                  <td className="px-3 py-2 border bg-[#f7e6b4] text-sm">
                    iii. Large Company
                  </td>
                  <td className="px-3 py-2 border">More than 500</td>
                  <td className="px-3 py-2 border">10000</td>
                  <td className="px-3 py-2 border">3</td>
                </tr>
                <tr className="border">
                  <td className="px-3 py-2 border bg-[#f7e6b4] text-sm">
                    iv. Group of Company
                  </td>
                  <td className="px-3 py-2 border">-</td>
                  <td className="px-3 py-2 border">25000</td>
                  <td className="px-3 py-2 border">5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 space-y-4 lg:hidden w-[380px] md:w-[360px]">
            {data.map((item, index) => (
              <div key={index} className="bg-yellow-100 rounded-xl p-4 shadow">
                <h2 className="font-bold text-lg mb-2">{item.category}</h2>
                <div className="text-sm">
                  <p>
                    <span className="font-semibold">No of Employees:</span>{" "}
                    {item.employees}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Annual Subscription (LKR):
                    </span>{" "}
                    {item.subscription}
                  </p>
                  <p>
                    <span className="font-semibold">
                      No of Representatives:
                    </span>{" "}
                    {item.representatives}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full pt-16">
          {/* Download Buttons */}
          <div className="flex flex-col lg:flex-row md:justify-center md:items-center">
            <div className="flex flex-col gap-4">
              <h4 className="lg:text-xl w-[400px]">
                Institutional Members / Organizational Members
              </h4>
              <a href="https://docs.google.com/document/d/1jvSyuO4LyqVGeat3KJpuTPFiJFfJhRPn/edit?tab=t.0">
                <button className="bg-[#ffcd57] hover:bg-yellow-500 text-gray-800 font-semibold py-4 px-6 rounded-full shadow lg:text-xl w-[300px]">
                  Download Application
                </button>
              </a>
            </div>
            <div className="flex flex-col gap-4 mt-8 lg:mt-0">
              <h4 className="lg:text-xl w-[400px]">Individual Members </h4>
              <a href="https://docs.google.com/document/d/1VYfoohCL9aRSOArMJ_Htt5t4rPvyty6y/edit?tab=t.0">
                <button className="bg-[#ffcd57] hover:bg-yellow-500 text-gray-800 font-semibold py-4 px-6 rounded-full shadow w-[300px] lg:text-xl">
                  Download Application
                </button>
              </a>
            </div>
            <div className="flex flex-col gap-4 mt-8 lg:mt-0">
              <h4 className="lg:text-xl w-[400px]">Student Membership</h4>
              <a href="https://docs.google.com/document/d/1H6eeGlYlL1qpu-JgoKT9BMuffgAuxeE3/edit?tab=t.0">
                <button className="bg-[#ffcd57] hover:bg-yellow-500 text-gray-800 font-semibold py-4 px-6 rounded-full shadow w-[300px] lg:text-xl">
                  Download Application
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipFeeDetails;
