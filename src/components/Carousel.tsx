"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { slides } from "@/lib/carouselData"
import BookingLanding from "./BookingLanding"

const Carousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!slides || slides.length === 0) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] sm:h-[67vh] lg:h-[72vh] overflow-hidden">

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={slide.image}
              alt="Hotel Hero"
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />

        {/* Hero Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-4xl">
            <h1 className="font-main font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Royal Hotel
            </h1>
            <p className="text-gray-200 font-secondary mt-4 sm:mt-6 text-base sm:text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto">
              Where world-class luxury meets the tranquil beauty of nature's finest landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Bar */}
      <div className="relative w-full -mt-10 sm:-mt-14 md:-mt-18 lg:-mt-22 px-4 z-20 flex justify-center">
        <div className="w-full overflow-hidden">
          <BookingLanding />
        </div>
      </div>
    </div>
  )
}

export default Carousel