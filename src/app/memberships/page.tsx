import MembershipPageTitle from '@/ui-core/components/molecules/MembershipPageTitle'
import MembershipFeeDetails from '@/ui-core/components/organisms/MemebrshipFeeDetails'
import Navbar from '@/ui-core/components/organisms/Navbar'
import ContactSection from '@/ui-core/layouts/ContactSection'
import Footer from '@/ui-core/layouts/Footer'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <MembershipPageTitle />
      <MembershipFeeDetails />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page