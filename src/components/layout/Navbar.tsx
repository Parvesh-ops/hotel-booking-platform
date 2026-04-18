"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Container from "../ui/container"

type NavLink = {
  name: string
  path: string
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()

  const links: NavLink[] = [
    { name: "About Us", path: "/about" },
    { name: "Rooms & Suites", path: "/room" },
    { name: "Restaurant & Menu", path: "/restaurant" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "overlay") {
      setMenuOpen(false)
    }
  }

  return (
    <>
      <div className="h-20 md:h-24" />

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#0D243A]/95 backdrop-blur-md shadow-md" : "bg-[#0D243A]"}`}
      >
        <Container extraClasses="flex items-center justify-between h-20 md:h-24">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/HotelLogo.png"
              alt="Hotel Logo"
              width={120}
              height={80}
              className="w-24 md:w-28 object-contain"
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-light">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors ${
                  pathname === link.path
                    ? "text-yellow-400"
                    : "text-white/80 hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* BOOK BUTTON */}
          <div className="hidden md:block">
            <Link href="/booking">
              <button className="bg-yellow-500 text-[#FDFDFD] px-4 py-2 text-sm font-semibold rounded hover:bg-yellow-400 transition cursor-pointer">
                BOOK NOW
              </button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl text-white"
          >
            ☰
          </button>
        </Container>
      </nav>

      {/* OVERLAY */}
      <div
        id="overlay"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={handleOverlayClick}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0A1F44] z-50 transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-[#FAFAFA]">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-[#FAFAFA]">
            ✕
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col p-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg ${
                pathname === link.path
                  ? "text-yellow-400 border-b border-yellow-500 w-fit"
                  : "text-white/80 hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/bookings" onClick={() => setMenuOpen(false)}>
            <button className="bg-yellow-500 text-[#0A1F44] w-full py-2 mt-4 font-semibold rounded">
              BOOK NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar