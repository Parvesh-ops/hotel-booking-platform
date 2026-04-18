import { Metadata } from "next";
import ContactContent from "./_component/ContactContent";

export const metadata: Metadata = {
    title: "Contact Us | The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const ContactPage = () => {
    return <ContactContent />;
};

export default ContactPage;