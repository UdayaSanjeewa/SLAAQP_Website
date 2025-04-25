import React from "react";

function ObserversSection() {
  return (
    <div className="container mx-auto lg:px-16 pb-10 px-4">
      <h3 className="text-2xl font-semibold my-6 text-black">
        Participate as Observers – Join Us!
      </h3>
      <p className="mb-4 text-lg text-gray-500">
        Are you interested in learning from the{" "}
        <span className="font-semibold">
          best practices in quality and productivity
        </span>
        ? We invite you to participate as an <strong>Observer</strong> at NCQP
        2025 and gain insights from top-performing teams and organizations.
      </p>

      <ul className="text-gray-600 mb-4">
        <li>✅ Witness live presentations</li>
        <li>✅ Network with quality professionals</li>
        <li>✅ Enhance your knowledge of practical improvement techniques</li>
      </ul>

      <p className="text-gray-600 mb-4 italic">
        (Registration closes on 10th May 2025)
      </p>
        <div className="flex justify-center items-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhN_OFWIPeHEphVAPv6GUqSJN8WCWSuyvkBgWJCfRRio85Yw/viewform">
      <button className="bg-yellow-400 hover:bg-[#ffcd57] text-gray-800 font-semibold px-8 py-4 rounded-full lg:text-xl">
        Click here to register as an Observer
      </button>          
          </a>
        </div>
    </div>
  );
}

export default ObserversSection;
