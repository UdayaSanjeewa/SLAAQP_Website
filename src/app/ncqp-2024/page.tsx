import Navbar from '@/ui-core/components/organisms/Navbar'
import ContactSection from '@/ui-core/layouts/ContactSection'
import Footer from '@/ui-core/layouts/Footer'
import NcqpRegistrationSection from '@/ui-core/layouts/NcqpRegistrationSection'
import ObserversSection from '@/ui-core/layouts/ObserversSection'
import PaymentDetails from '@/ui-core/layouts/PaymentDetails'
import React from 'react'

function Ncqp2025() {
  return (
    <div>
      <Navbar />
      <NcqpRegistrationSection />
      <ObserversSection />
      <PaymentDetails />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Ncqp2025