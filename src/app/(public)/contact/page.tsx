"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import PageBanner from "@/src/components/PageBanner";
import Container from "@/src/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};


const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    const contactInfo = [
        {
            icon: <MapPin size={18} className="text-[#FDFDFD] mt-0.5 flex-shrink-0" />,
            text: "450 Lexicon Avenue, Financial District, New York, NY 10004",
        },
        {
            icon: <Phone size={18} className="text-[#FDFDFD] flex-shrink-0" />,
            text: "+1 (212) 888-ARCH",
        },
        {
            icon: <Mail size={18} className="text-[#FDFDFD] flex-shrink-0" />,
            text: "concierge@arch-ledger.com",
        },
    ];

    return (
        <div>
            {/* Hero Banner */}
            <PageBanner
                image="/about-banner.png"
                title="Contact Us"
                name=""
            />

            {/* Contact Section */}
            <section className="bg-[#0D1F3C] py-16">
                <Container>
                    <div className="flex flex-col md:flex-row gap-8">

                        {/* Left — Get in Touch */}
                        <div className="flex flex-col gap-6 md:w-1/2">
                            <div>
                                <h2
                                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    Get in Touch
                                </h2>
                                <p className="text-[#E9EEF2] text-sm leading-relaxed">
                                    Whether you have a question about our suites or wish to make a
                                    special request, our concierge team is at your service.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <ul className="flex flex-col gap-4">
                                {contactInfo.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="bg-[#C9960C] p-2 rounded-sm">
                                            {item.icon}
                                        </span>
                                        <span className="text-[#E9EEF2] text-sm leading-relaxed mt-1">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Map */}
                            <div className="w-full h-52 overflow-hidden rounded-sm">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343005!2d-74.01370908459418!3d40.71278097933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1615998765417!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Right — Send a Message */}
                        <div className="md:w-1/2  bg-[#112E49] p-4 flex flex-col gap-6">
                            <h2
                                className="text-2xl md:text-3xl font-bold text-white"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                Send a Message
                            </h2>

                            {/* Form */}
                            <div className="flex flex-col gap-5">
                                {/* Full Name & Email */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="text-[#E9EEF2] font-bold text-[10px] tracking-widest uppercase">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="John Doe"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-[#E9EEF2]/30 text-white text-sm py-2 placeholder:text-[#E9EEF2]/40 focus:outline-none focus:border-[#C9960C] transition-colors duration-200"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <label className="text-[#E9EEF2] font-bold text-[10px] tracking-widest uppercase">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-[#E9EEF2]/30 text-white text-sm py-2 placeholder:text-[#E9EEF2]/40 focus:outline-none focus:border-[#C9960C] transition-colors duration-200"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-[#E9EEF2] font-bold text-[10px] tracking-widest uppercase">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="How can we help you?"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-[#E9EEF2]/30 text-white text-sm py-2 placeholder:text-[#E9EEF2]/40 focus:outline-none focus:border-[#C9960C] transition-colors duration-200 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    onClick={handleSubmit}
                                    className="w-full bg-[#C9960C] text-white text-xs font-bold tracking-widest uppercase py-5 hover:bg-[#a97d0a] transition-colors duration-200 mt-2"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default ContactPage;