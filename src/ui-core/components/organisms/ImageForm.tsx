import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageFormProps {
  image: StaticImageData;
  title: string;
  date: string;
  time: string;
  venue: string;
  courseFee: string;
  link: string;
}

const ImageForm: React.FC<ImageFormProps> = ({ image, title, date, time, venue, courseFee, link }) => {
  return (
    <div className="bg-[#f3f4f6] py-10 mt-28 md:mt-0 lg:mt-28">
      <div className='container mx-auto flex md:flex-row flex-col lg:px-0 px-3'>
      {/* Image Section */}
      <div id="div1" className="w-full md:w-1/2 h-64 md:h-full flex justify-end items-center md:mb-0 mb-44">
        <Image
          src={image}
          alt="Training Event"
          width={530}
          height={750}
          priority
        />
      </div>

      {/* Form Section */}
      <div id="div2" className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-start lg:p-8 bg-gray-100 md:-mt-6 lg:mt-0">
        <div className="bg-gray-100 p-6 rounded-md max-w-xl mx-auto">
          {/* Header */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-2 mb-4 uppercase">
            {title}
          </h2>

          {/* Subheading */}
          <h3 className="font-bold lg:text-2xl text-gray-500 mb-4 text-xl">Program Details</h3>

          {/* Details List */}
          <ul className="text-gray-500 space-y-2 lg:text-xl font-bold text-lg">
            <li>
              <span className="font-bold">• &nbsp;Date:</span> {date}
            </li>
            <li>
              <span className="font-bold">• &nbsp;Time:</span> {time}
            </li>
            <li>
              <span className="font-bold">• &nbsp;Venue:</span> {venue}
            </li>
            <li>
              <span className="font-bold">• &nbsp;Course Fee:</span> {courseFee}
            </li>
          </ul>

          {/* Button */}
          <div className="flex justify-center mt-16">
            <a href={link}>
            <button className="bg-orange-400 text-white font-semibold lg:px-6 py-4 rounded hover:bg-slate-900 transition-colors lg:w-full text-lg px-10">
              REGISTER NOW
            </button>              
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ImageForm;
