import Navbar from '@/ui-core/components/organisms/Navbar'
import ContactSection from '@/ui-core/layouts/ContactSection'
import Footer from '@/ui-core/layouts/Footer'
import IcqccImagesSection from '@/ui-core/layouts/IcqccImagesSection'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <IcqccImagesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page