import { Metadata } from "next";
import GalleryClient from "./galleryClient";

export const metadata: Metadata = {
    title: "Gallery | The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const GalleryPage = () => {
    return <GalleryClient />;
};

export default GalleryPage;