import { Metadata } from "next";
import RoomClient from "./roomClient";

export const metadata: Metadata = {
    title: "Rooms & Suites |The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const RoomsAndSuites = () => {
    return <RoomClient />;
};

export default RoomsAndSuites;