import React from 'react'
import Carousel from '@/src/components/Carousel'
import About from '@/src/components/About'
import RoomsSection from '@/src/components/Rooms'
import FacilitiesSection from '@/src/components/Facilities'

const page = () => {
  return (
    <>
      <Carousel />
      <About />
      <FacilitiesSection />
      <RoomsSection />
    </>
  )
}

export default page