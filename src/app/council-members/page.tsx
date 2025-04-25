import Navbar from '@/ui-core/components/organisms/Navbar';
import ContactSection from '@/ui-core/layouts/ContactSection';
import CouncilMembersSection from '@/ui-core/layouts/CouncilMembersSection';
import Footer from '@/ui-core/layouts/Footer';
import React from 'react';

function CouncilMembers() {
  return (
    <div>
      <Navbar />

      {/* Banner Section */}
      <section
        className="relative h-[270px] bg-cover bg-center"
      >

              {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://slaaqp.org/wp-content/uploads/2024/01/mikael-kristenson-242070-unsplash_2500-1.jpg')] 
        bg-cover bg-center bg-fixed z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

        {/* Text Content aligned top-left */}
        <div className="relative z-10 container mx-auto px-10 pt-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            SLAAQP COUNCIL MEMBERS
          </h1>
        </div>
      </section>
      <div className='bg-blue-400 w-full h-2'></div>
      <CouncilMembersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default CouncilMembers;
