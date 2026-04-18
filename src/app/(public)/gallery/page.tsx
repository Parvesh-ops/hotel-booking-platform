import { Metadata } from "next";
import GalleryContent from "./_component/GalleryContent";

export const metadata: Metadata = {
    title: "Gallery | The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const GalleryPage = () => {
    return <GalleryContent />;
};

export default GalleryPage;