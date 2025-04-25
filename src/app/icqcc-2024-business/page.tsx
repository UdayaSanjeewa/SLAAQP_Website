import Navbar from '@/ui-core/components/organisms/Navbar'
import ContactSection from '@/ui-core/layouts/ContactSection'
import Footer from '@/ui-core/layouts/Footer'
import IcqccBusinessSection from '@/ui-core/layouts/IcqccBusinessSection'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <IcqccBusinessSection />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default page