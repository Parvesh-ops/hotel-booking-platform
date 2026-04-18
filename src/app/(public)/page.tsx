import React from 'react'
import Carousel from '@/src/components/Carousel'
import About from '@/src/components/About'
import RoomsSection from '@/src/components/Rooms'
import FacilitiesSection from '@/src/components/Facilities'
import AwardsSection from '@/src/components/Awards'
import ReviewsSection from '@/src/components/Reviews'
import BenefitsSection from '@/src/components/Benifits'
import ContactSection from '@/src/components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};


const page = () => {
  return (
    <>
      <Carousel />
      <About />
      <FacilitiesSection />
      <RoomsSection />
      <AwardsSection />
      <ReviewsSection />
      <BenefitsSection />
      <ContactSection/>
    </>
  )
}

export default page