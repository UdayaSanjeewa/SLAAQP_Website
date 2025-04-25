// components/GPAwards.tsx

import { FileDown, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GPAwards = () => {
  return (
    <section className="p-6 space-y-6 container mx-auto lg:px-20">
      <h1 className="lg:text-5xl text-slate-800 font-semibold text-2xl">
        Green Productivity Award 2022
      </h1>

      <div className="flex flex-col">
        <div className="flex gap-8 flex-col md:flex-row">
          <Link
            href="#"
            className="text-black underline hover:text-blue-800 transition text-xl"
          >
            GP Award 2022 – Registration Link
          </Link>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMsbik2DpEc-VFYK_CL0Ib7n29Fveu8LYWhjtHip1IA0P0YA/viewform">
          <button className="flex items-center gap-2 bg-[#ffcd57] text-black py-4 rounded-full shadow hover:bg-yellow-300 transition text-xl font-semibold px-6 w-[240px] justify-center">
            <Send className="w-4 h-4" />
            Register Now
          </button>          
          </a>
        </div>

        <div className="flex gap-8 mt-10 flex-col md:flex-row">
          <Link
            href="#"
            className="text-black underline hover:text-blue-800 transition text-xl"
          >
            Application Form
          </Link>

          <Link
            href="https://slaaqp.org/wp-content/uploads/2024/01/GP-Application-Form.pdf"
            className="flex items-center gap-2 bg-[#5cb85c] py-4 rounded-full shadow hover:bg-green-500 transition px-6 w-[280px] justify-center"
          >
            <FileDown className="w-5 h-5 text-white" />
            Click here to Download
          </Link>
        </div>
      </div>

      <div className="mt-4 border rounded shadow overflow-hidden lg:w-[65%]">
        <Image
          src="/GPAwardsImages/ClosingDateMonday11.png"
          alt="Green Productivity Award 2022"
          width={800}
          height={1000}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default GPAwards;
