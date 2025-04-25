'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic (emailjs, API call, etc.)
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="text-center mb-10">
        <p className="text-xs uppercase text-orange-600 font-semibold">We&apos;d love to hear from you</p>
        <h2 className="md:text-6xl font-semibold text-gray-800 mt-2 text-4xl">Stay Connected</h2>
      </div>

      <div className="mx-auto lg:px-36 grid grid-cols-1 md:grid-cols-2 gap-10 items-start container px-7">
        {/* Left Column */}
        <div>
          <div className="mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126740.61660947754!2d79.78616409512986!3d6.927078186425794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25958f86f9f8f%3A0x6d68930fc2a31325!2sBMICH%20(Bandaranaike%20Memorial%20International%20Conference%20Hall)!5e0!3m2!1sen!2slk!4v1712760900000!5m2!1sen!2slk"
              width="100%"
              height="280"
              loading="lazy"
              allowFullScreen
              className="border"
            ></iframe>
          </div>

          <div className="text-gray-800 space-y-2 md:text-[16px] font-semibold text-[14px]">
            <p className="md:text-2xl text-xl">REACH US THROUGH</p>
            <div className='flex pl-6 flex-col gap-2'>
            <p>3G-21, BMICH, Colombo 07, Sri Lanka.</p>
            <p>+94 11 267 8808 / +94 70 734 3233</p>
            <p>info@slaaqp.org</p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className='text-sm text-gray-500'>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label htmlFor="email" className='text-sm text-gray-500'>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label htmlFor="message" className='text-sm text-gray-500'>Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-[#605be5] text-white font-semibold transition h-16 text-xl"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
