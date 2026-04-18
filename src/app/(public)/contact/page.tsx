import { Metadata } from "next";
import ContactClient from "./contactClient";

export const metadata: Metadata = {
    title: "Contact Us | The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const ContactPage = () => {
    return <ContactClient />;
};

export default ContactPage;