import Link from "next/link"
import { FaFacebookF, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Container from "../ui/container"

const Footer = () => {
  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Restaurant & Menu", href: "/menu" },
    { label: "Facilities", href: "/facilities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ]

  const contactInfo = [
    {
      icon: <MapPin size={16} className="text-[#C9960C] mt-0.5 flex-shrink-0" />,
      text: "450 Lexicon Avenue, Financial District, New York, NY 10004",
    },
    {
      icon: <Phone size={16} className="text-[#C9960C] flex-shrink-0" />,
      text: "+1 (212) 888-ARCH",
    },
    {
      icon: <Mail size={16} className="text-[#C9960C] flex-shrink-0" />,
      text: "concierge@arch-ledger.com",
    },
  ]

  const socialLinks = [
    { icon: <FaFacebookF size={17} />, href: "#" },
    { icon: <FaTiktok size={17} />, href: "#" },
    { icon: <FaInstagram size={17} />, href: "#" },
    { icon: <FaWhatsapp size={17} />, href: "#" },
  ]

  return (
    <footer className="bg-primary-12">

      {/* MAIN FOOTER */}
      <Container extraClasses="py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div className="flex flex-col gap-5">

          <Image
            src="/HotelLogo.png"
            alt="Hotel Logo"
            width={100}
            height={100}
            className="w-24 max-w-[120px] object-contain"
            priority
          />

          <p className="text-[#FDFDFD] text-sm leading-relaxed">
            Defining excellence in luxury hospitality since 1995.
            <br />
            A sanctuary for the refined traveler.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-4 mt-1">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-[#FDFDFD] hover:text-[#C9960C] transition-colors duration-200 border border-[#FDFDFD]/10 hover:border-[#C9960C] p-2"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* EXPLORE */}
        <div className="flex flex-col gap-5">
          <h5 className="text-[#C9960C] text-xs font-semibold tracking-widest uppercase">
            Explore
          </h5>

          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#FDFDFD] text-sm hover:text-[#C9960C] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-5">
          <h5 className="text-[#C9960C] text-xs font-semibold tracking-widest uppercase">
            Contact
          </h5>

          <ul className="flex flex-col gap-4">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {item.icon}
                <span className="text-[#FDFDFD] text-sm leading-relaxed">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </Container>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#C9960C]/20 font-bold">
        <Container extraClasses="py-4 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-[#FDFDFD] text-xs tracking-wide">
            © {new Date().getFullYear()} CLASSICO THEME. ALL RIGHT RESERVED
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[#FDFDFD] text-xs hover:text-[#C9960C] transition-colors duration-200"
            >
              PRIVACY POLICY
            </Link>

            <Link
              href="#"
              className="text-[#FDFDFD] text-xs hover:text-[#C9960C] transition-colors duration-200"
            >
              TERMS & CONDITIONS
            </Link>
          </div>

        </Container>
      </div>

    </footer>
  )
}

export default Footer