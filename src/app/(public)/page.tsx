import React from 'react'
import Carousel from '@/src/components/Carousel'
import About from '@/src/components/About'
import RoomsSection from '@/src/components/Rooms'
import FacilitiesSection from '@/src/components/Facilities'
import AwardsSection from '@/src/components/Awards'

const page = () => {
  return (
    <>
      <Carousel />
      <About />
      <FacilitiesSection />
      <RoomsSection />
      <AwardsSection />
    </>
  )
}

export default page