'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
  { title: 'Our Vision', content: 'We aim to inspire, innovate, and impact future generations through quality education and values.' },
  { title: 'Our Mission', content: 'To provide a nurturing environment for students to explore, grow, and become future leaders.' },
  { title: 'Our Focus', content: 'Fostering creativity, academic excellence, and a sense of community.' },
];

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div
  className="relative bg-fixed bg-cover bg-center min-h-[74vh]"
  style={{
    backgroundImage:
      "url('https://slaaqp.org/wp-content/uploads/2024/01/homepage2-hero-2.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-purple-900/80" />

  <div className="relative z-10 py-12 text-white container mx-auto px-6 flex flex-col md:px-20">
    <h2 className="text-5xl font-semibold text-[#f7dc79] mb-4 text-center md:text-left">ABOUT US</h2>
    {sections.map((section, index) => (
      <div
        key={index}
        className="mb-4 bg-white/90 text-gray-800 shadow-lg overflow-hidden"
      >
        <button
          onClick={() => toggleSection(index)}
          className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-semibold text-gray-700 hover:bg-white/80 transition"
        >
          <span className="underline underline-offset-2">{section.title}</span>
          <ChevronDown
            className={`transition-transform duration-300 ${
              openIndex === index ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openIndex === index && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-6 pb-4 text-base text-gray-700"
          >
            <p>{section.content}</p>
          </motion.div>
        )}
      </div>
    ))}
  </div>
</div>
  );
};

export default AboutUs;
