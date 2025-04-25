import Navbar from '@/ui-core/components/organisms/Navbar'
import AwarenessSessionSection from '@/ui-core/layouts/AwarenessSessionSection'
import ContactSection from '@/ui-core/layouts/ContactSection'
import EnrollSection from '@/ui-core/layouts/EnrollSection'
import Footer from '@/ui-core/layouts/Footer'
import ReportWritingWorkshopSection from '@/ui-core/layouts/ReportWritingWorkshopSection'
import SeminarsSection from '@/ui-core/layouts/SeminarsSection'
import React from 'react'
//url("https://slaaqp.org/wp-content/uploads/2024/01/homepage2-hero-2.jpg")
function Programs() {
  return (
    <div>
      <Navbar />
      <AwarenessSessionSection />
      <ReportWritingWorkshopSection />
      <SeminarsSection />
      <EnrollSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Programs