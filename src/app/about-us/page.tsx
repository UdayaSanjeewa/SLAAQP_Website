import Navbar from '@/ui-core/components/organisms/Navbar'
import ContactSection from '@/ui-core/layouts/ContactSection'
import Footer from '@/ui-core/layouts/Footer'
import React from 'react'

function AboutUs() {
  return (
    <div>
        <Navbar />
        <div className='container mx-auto pt-10 px-8 lg:px-0'>
        <h1 className='text-3xl font-semibold'>About Us</h1>
        </div>
        <ContactSection />
        <Footer />
    </div>
  )
}

export default AboutUs