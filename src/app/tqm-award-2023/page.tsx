import Navbar from '@/ui-core/components/organisms/Navbar'
import TqmAwardSection from '@/ui-core/layouts/TqmAwardSection'
import React from 'react'
import TqmAward1 from "/public/slaaqpImages/TQMAward1.jpg";
import TqmAward2 from "/public/slaaqpImages/TQMAward2.png";
import ContactSection from '@/ui-core/layouts/ContactSection';
import Footer from '@/ui-core/layouts/Footer';

function page() {
  return (
    <div>
        <Navbar />
        <TqmAwardSection />
        <div className='container mx-auto lg:px-10 px-4'>
            <img src={TqmAward1.src} alt='tqm award image 01' /* width={720} */ className='w-[720px]' />
            <img src={TqmAward2.src} alt='tqm award image 02' className='w-full' />
        </div>
        <ContactSection />
        <Footer />
    </div>
  )
}

export default page