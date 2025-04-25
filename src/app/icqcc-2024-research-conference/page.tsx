import Navbar from '@/ui-core/components/organisms/Navbar'
import ContactSection from '@/ui-core/layouts/ContactSection'
import Footer from '@/ui-core/layouts/Footer'
import ResearchConferencePartOne from '@/ui-core/layouts/ResearchConferencePartOne'
import ResearchConferencePartTwo from '@/ui-core/layouts/ResearchConferencePartTwo'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <ResearchConferencePartOne />
        <ResearchConferencePartTwo />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default page