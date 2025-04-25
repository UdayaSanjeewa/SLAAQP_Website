// components/AwarenessSessionSection.tsx
import Image from "next/image";
import { Button } from "../components/atoms/Button";
import { Calendar, Menu } from "lucide-react";
import RegisterButton from "../components/molecules/RegisterButton";

const AwarenessSessionSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#3a2352] to-[#6a4b84] text-white py-8">
      <div className="container mx-auto lg:px-20 px-6">
        <div className="mb-4 inline-block bg-[#f7e6b4] text-black text-lg px-10 py-4 font-semibold">
          March 2025
        </div>
        <h2 className="text-[50px] font-bold mb-12 text-[#f7dfaf]">NCQP 2025 - AWARENESS SESSION</h2>
        <div className="h-1 bg-[#f7e6b4] w-28"></div>

        <div className="bg-white overflow-hidden shadow-lg max-w-3xl mx-auto mt-6">
          <Image
            src="/programsImages/NCQPAwarenessSession2025.png"
            alt="NCQP Awareness Session Poster"
            width={768}
            height={903}
            className="w-full h-auto"
          />
        </div>

        <div className="bg-white text-black mt-10 p-6 rounded-lg shadow-md">
          <p className="text-sm font-medium mb-2">
            Join Zoom Meeting Link – 14th February 2025
          </p>
          <a
            href="https://zoom.us/rec/share/GZ7t6a8N9pK23Z7tEfgSDpwTcaiC9LRjXQOgPyvtJBK3-WBpA5m-KXy8twpMrE0eW.2JBaNrrsMWdgFZEF"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-words"
          >
            https://zoom.us/rec/share/GZ7t6a8N9pK23Z7tEfgSDpwTcaiC9LRjXQOgPyvtJBK3-WBpA5m-KXy8twpMrE0eW.2JBaNrrsMWdgFZEF
          </a>
        </div>

        <div className="mt-8 text-end lg:text-center">
          {/* <Button className="bg-[#f7e6b4] text-black hover:bg-yellow-500 font-semibold px-6 py-3 text-xl">
            REGISTER
            <Menu className="inline-block ml-4" size={24} />
          </Button> */}
          <RegisterButton />
        </div>
      </div>
    </section>
  );
};

export default AwarenessSessionSection;
