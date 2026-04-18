import React from 'react'
import Carousel from '@/src/components/Carousel'
import About from '@/src/components/About'
import RoomsSection from '@/src/components/Rooms'

const page = () => {
  return (
    <>
      <Carousel />
      <About />
      <RoomsSection />
    </>
  )
}

export default page