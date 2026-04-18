import { Metadata } from "next";
import RestaurantContent from "./_component/RestaurantContent";

export const metadata: Metadata = {
    title: "Restaurant & Menu | The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const MenuPage = () => {
    return <RestaurantContent />;
};

export default MenuPage;