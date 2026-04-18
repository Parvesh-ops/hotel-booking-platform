import { Metadata } from "next";
import AboutContent from "./_component/AboutContent";

export const metadata: Metadata = {
    title: "About Us | The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const About = () => {
    return <AboutContent />;
};

export default About;