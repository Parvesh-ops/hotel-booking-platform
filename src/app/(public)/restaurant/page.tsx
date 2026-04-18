import { Metadata } from "next";
import RestaurantClient from "./resturantClient";

export const metadata: Metadata = {
    title: "Restaurant & Menu | The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const MenuPage = () => {
    return <RestaurantClient />;
};

export default MenuPage;