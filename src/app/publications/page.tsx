import Navbar from '@/ui-core/components/organisms/Navbar'
import ContactSection from '@/ui-core/layouts/ContactSection'
import Footer from '@/ui-core/layouts/Footer'
import Publications from '@/ui-core/layouts/Publications'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <Publications />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default page